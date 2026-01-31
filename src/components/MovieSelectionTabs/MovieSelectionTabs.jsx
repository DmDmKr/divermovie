import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/nameConstants'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')
  const currentPath = location.pathname

  return (
    <div className="MovieSelectionTabs">
      <Link
        to={`${currentPath}?movie=${DIVER_MOVIE_NAME}`}
        className={movie === DIVER_MOVIE_NAME || !movie ? 'selected' : ''}
      >
        Ныряльщик
      </Link>
      <Link
        to={`${currentPath}?movie=${DRUNK_NOTES_MOVIE_NAME}`}
        className={movie === DRUNK_NOTES_MOVIE_NAME ? 'selected' : ''}
      >
        Записки по пьяни
      </Link>
    </div>
  )
}

export default MovieSelectionTabs
