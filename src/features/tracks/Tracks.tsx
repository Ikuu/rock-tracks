import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import TrackList from '../../components/TrackList'

function Tracks() {
  const { results, error, loading } = useAppSelector(({ tracks }) => tracks)
  const hasResults = results.length > 0
  const showResults = hasResults && !error && !loading

  return (
    <>
      {error && <div>Error has occured</div>}
      {loading && <div>Loading...</div>}
      {showResults && (
        <div>
          <h2>Tracks</h2>
          <ul>
            {results.map((track) => (
              <li key={track.id}>
                <Link to={`/track/${track.id}`}>
                  <TrackList
                    id={track.id}
                    artist={track.artist}
                    trackName={track.trackName}
                    image={track.image}
                    price={track.price}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Tracks
