import { useParams } from 'react-router'
import { useAppSelector } from '../../app/hooks'
import TrackDetails from '../../components/TrackDetails'

interface Params {
  trackId: string
}

function Selected() {
  const { trackId } = useParams<Params>()
  const { error, loading, track } = useAppSelector(({ tracks }) => ({
    error: tracks.error,
    loading: tracks.loading,
    track: tracks.results.find((t) => t.id === parseInt(trackId)),
  }))
  const trackNotFound = !track && !error && !loading

  return (
    <>
      {error && <div>Error has occured</div>}
      {loading && <div>Loading...</div>}
      {trackNotFound && <div>Track not found</div>}
      {track && (
        <TrackDetails
          id={track.id}
          artist={track.artist}
          trackName={track.trackName}
          image={track.image}
          price={track.price}
          duration={track.duration}
          releaseDate={track.releaseDate}
          url={track.url}
        />
      )}
    </>
  )
}

export default Selected
