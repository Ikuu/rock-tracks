import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../../app/store'
import { fetchSongs, TrackApiResponse } from '../../utils/api'

export interface State {
  error: boolean
  loading: boolean
  results: Track[]
}

export interface Track {
  id: number
  artist: string
  trackName: string
  image: string
  price: number
  duration: number
  releaseDate: string
  url: string
}

const initialState: State = {
  error: false,
  loading: false,
  results: [],
}

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    isLoading(state) {
      state.error = false
      state.loading = true
    },
    getTracksSuccess(state, action: PayloadAction<TrackApiResponse>) {
      const { results } = action.payload

      state.error = false
      state.loading = false
      state.results = results.map((result) => ({
        id: result.trackId,
        artist: result.artistName,
        trackName: result.trackName,
        image: result.artworkUrl100,
        price: result.trackPrice,
        duration: result.trackTimeMillis,
        releaseDate: result.releaseDate,
        url: result.trackViewUrl,
      }))
    },
    getTracksFailure(state) {
      state.error = true
      state.loading = false
    },
  },
})

export const { isLoading, getTracksSuccess, getTracksFailure } =
  tracksSlice.actions

export const getTracks = () => async (dispatch: AppDispatch) => {
  dispatch(isLoading())

  try {
    const productDetails = await fetchSongs()

    dispatch(getTracksSuccess(productDetails))
  } catch {
    dispatch(getTracksFailure())
  }
}

export default tracksSlice.reducer
