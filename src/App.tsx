import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useAppDispatch } from './app/hooks'
import Selected from './features/selected/Selected'
import Tracks from './features/tracks/Tracks'
import { getTracks } from './features/tracks/tracksSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])

  return (
    <Router>
      <div>
        <h1>
          <Link to="/">Rock Tracks</Link>
        </h1>

        <Switch>
          <Route path="/track/:trackId">
            <Selected />
          </Route>
          <Route path="/">
            <Tracks />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
