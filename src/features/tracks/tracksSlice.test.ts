import { TrackApiResponse } from '../../utils/api'
import tracksReducer, {
  State,
  isLoading,
  getTracksFailure,
  getTracksSuccess,
} from './tracksSlice'

const initialState: State = {
  error: false,
  loading: false,
  results: [],
}

test('initial state', () => {
  expect(tracksReducer(undefined, { type: '' })).toEqual(initialState)
})

test('isLoading', () => {
  expect(tracksReducer(undefined, { type: isLoading.type })).toEqual({
    ...initialState,
    loading: true,
  })
})

test('getTracksFailure', () => {
  expect(tracksReducer(undefined, { type: getTracksFailure.type })).toEqual({
    ...initialState,
    loading: false,
    error: true,
  })
})

test('getTracksSuccess', () => {
  const payload: TrackApiResponse = {
    resultCount: 1,
    results: [
      {
        artistId: 259369321,
        artistName: 'The-Dream',
        artistViewUrl:
          'https://music.apple.com/us/artist/the-dream/259369321?uo=4',
        artworkUrl30:
          'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/e9/b5/7d/e9b57d9f-ca90-e9bf-4208-d70daf7f7b55/source/30x30bb.jpg',
        artworkUrl60:
          'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/e9/b5/7d/e9b57d9f-ca90-e9bf-4208-d70daf7f7b55/source/60x60bb.jpg',
        artworkUrl100:
          'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/e9/b5/7d/e9b57d9f-ca90-e9bf-4208-d70daf7f7b55/source/100x100bb.jpg',
        collectionCensoredName: 'Roc - Single',
        collectionExplicitness: 'explicit',
        collectionId: 1445306598,
        collectionName: 'Roc - Single',
        collectionPrice: 1.29,
        collectionViewUrl:
          'https://music.apple.com/us/album/roc/1445306598?i=1445306607&uo=4',
        contentAdvisoryRating: 'Explicit',
        country: 'USA',
        currency: 'USD',
        discCount: 1,
        discNumber: 1,
        isStreamable: true,
        kind: 'song',
        previewUrl:
          'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/43/84/e7/4384e720-487d-e0e5-ce23-f6f80ab7ae2f/mzaf_1129185583740530559.plus.aac.p.m4a',
        primaryGenreName: 'R&B/Soul',
        releaseDate: '2012-03-06T12:00:00Z',
        trackCensoredName: 'Roc',
        trackCount: 1,
        trackExplicitness: 'explicit',
        trackId: 1445306607,
        trackName: 'Roc',
        trackNumber: 1,
        trackPrice: 1.29,
        trackTimeMillis: 332427,
        trackViewUrl:
          'https://music.apple.com/us/album/roc/1445306598?i=1445306607&uo=4',
        wrapperType: 'track',
      },
    ],
  }

  const track = payload.results[0]

  expect(
    tracksReducer(undefined, { type: getTracksSuccess.type, payload }),
  ).toEqual({
    ...initialState,
    loading: false,
    results: [
      {
        id: track.trackId,
        artist: track.artistName,
        trackName: track.trackName,
        image: track.artworkUrl100,
        price: track.trackPrice,
        releaseDate: track.releaseDate,
        duration: track.trackTimeMillis,
        url: track.trackViewUrl,
      },
    ],
  })
})
