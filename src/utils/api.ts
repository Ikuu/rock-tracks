import fetchJsonp from 'fetch-jsonp'

export interface TrackApiResponse {
  resultCount: number
  results: ApiTrack[]
}

export interface ApiTrack {
  artistId: number
  artistName: string
  artistViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionCensoredName: string
  collectionExplicitness: string
  collectionId: number
  collectionName: string
  collectionPrice: number
  collectionViewUrl: string
  contentAdvisoryRating: string
  country: string
  currency: string
  discCount: number
  discNumber: number
  isStreamable: boolean
  kind: string
  previewUrl: string
  primaryGenreName: string
  releaseDate: string
  trackCensoredName: string
  trackCount: number
  trackExplicitness: string
  trackId: number
  trackName: string
  trackNumber: number
  trackPrice: number
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: string
}

export const fetchSongs = async (): Promise<TrackApiResponse> => {
  // For some reason 'rock' just doesn't work for me at all, or works occasionally
  // const res = await fetchJsonp('https://itunes.apple.com/search?term=rock&media=music')
  const res = await fetchJsonp(
    'https://itunes.apple.com/search?term=roc&media=music',
  )
  const data: TrackApiResponse = await res.json()

  console.log(data)

  return data
}
