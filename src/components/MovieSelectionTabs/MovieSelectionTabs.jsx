import { Link, useLocation } from 'react-router'
import { MOVIES, movieTitles } from '../../utils/nameConstants'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = ({ selectedMovie = MOVIES.DIVER }) => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="MovieSelectionTabs">
      {Object.values(MOVIES).map(movie => (
        <Link
          key={movie}
          to={`${currentPath}?movie=${movie}`}
          className={selectedMovie === movie ? 'selected' : ''}
        >
          {movieTitles[movie]}
        </Link>
      ))}
    </div>
  )
}

export default MovieSelectionTabs
