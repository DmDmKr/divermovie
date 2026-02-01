import { useSearchParams } from 'react-router-dom'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../utils/nameConstants'

export const useSelectedMovie = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie') || DIVER_MOVIE_NAME

  return {
    movie,
    isDiver: movie === DIVER_MOVIE_NAME || !searchParams.get('movie'),
    isDrunkNotes: movie === DRUNK_NOTES_MOVIE_NAME
  }
}
