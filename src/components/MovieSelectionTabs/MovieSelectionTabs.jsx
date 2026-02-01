import { Link, useLocation } from 'react-router-dom'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/nameConstants'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = () => {
  const location = useLocation()
  const { isDiver, isDrunkNotes } = useSelectedMovie()
  const currentPath = location.pathname

  return (
    <div className="MovieSelectionTabs">
      <Link to={`${currentPath}?movie=${DIVER_MOVIE_NAME}`} className={isDiver ? 'selected' : ''}>
        Ныряльщик
      </Link>
      <Link
        to={`${currentPath}?movie=${DRUNK_NOTES_MOVIE_NAME}`}
        className={isDrunkNotes ? 'selected' : ''}
      >
        Записки по пьяни
      </Link>
    </div>
  )
}

export default MovieSelectionTabs
