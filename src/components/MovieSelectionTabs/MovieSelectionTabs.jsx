import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/name_constants'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = () => {
  const location = useLocation()
  const [selectedButtonId, setSelectedButtonId] = useState('diverButton')
  const currentPath = location.pathname

  return (
    <div>
      <ul className="MovieSelectionTabs">
        <button
          id="diverButton"
          onClick={() => setSelectedButtonId('diverButton')}
          className={selectedButtonId === 'diverButton' ? 'selected' : ''}
        >
          <Link to={`${currentPath}?movie=${DIVER_MOVIE_NAME}`}>Ныряльщик</Link>
        </button>
        <button
          id="drunkNotesButton"
          onClick={() => setSelectedButtonId('drunkNotesButton')}
          className={selectedButtonId === 'drunkNotesButton' ? 'selected' : ''}
        >
          <Link to={`${currentPath}?movie=${DRUNK_NOTES_MOVIE_NAME}`}>Записки по пьяни</Link>
        </button>
      </ul>
    </div>
  )
}

export default MovieSelectionTabs
