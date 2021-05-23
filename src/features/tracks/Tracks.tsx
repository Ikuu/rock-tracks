import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TrackList from '../../components/TrackList'
import { getTracks } from './tracksSlice'

function Tracks() {
  const dispatch = useAppDispatch()
  const { results, error, loading } = useAppSelector(({ tracks }) => tracks)
  const hasResults = results.length > 0
  const showResults = hasResults && !error && !loading

  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])

  return (
    <div>
      {error && <div>Error has occured</div>}
      {loading && <div>Loading Spinner</div>}
      {showResults && (
        <>
          <h2>Tracks</h2>
          <ul>
            {results.map((track) => (
              <TrackList
                key={track.id}
                artist={track.artist}
                trackName={track.trackName}
                image={track.image}
                price={track.price}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Tracks
