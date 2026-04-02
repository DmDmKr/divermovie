import { useSearchParams } from 'react-router-dom'
import { MOVIES, VALID_MOVIES } from '../utils/nameConstants'

export const useSelectedMovie = () => {
  const [searchParams] = useSearchParams()
  const raw = searchParams.get('movie')
  // VALID_MOVIES is a module-level Set — O(1) lookup, no array allocated per render
  const movie = VALID_MOVIES.has(raw) ? raw : MOVIES.DIVER

  return { movie }
}
