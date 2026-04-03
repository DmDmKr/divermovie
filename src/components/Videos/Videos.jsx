import './Videos.css'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import VideoPlayer from './VideoPlayer'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'
import { MOVIES } from '../../utils/nameConstants'

const Videos = () => {
  const { movie } = useSelectedMovie()

  return (
    <div className="VideosWrapper">
      <MovieSelectionTabs selectedMovie={movie} />
      <ErrorBoundary fallbackMessage="Не удалось загрузить видеоплеер. Проверьте подключение к интернету.">
        <div className="Videos" role="region" aria-label="Видеоплеер">
          {movie === MOVIES.DIVER && (
            <>
              <VideoPlayer
                title='Фильм "Ныряльщик" (русская версия):'
                src="https://rutube.ru/play/embed/bb623cc7593278f20a27d3001f9ed774/"
                ariaLabelId="diver-russian"
              />
              <VideoPlayer
                title='"The Diver" movie (with English subtitles):'
                src="https://www.youtube.com/embed/dktfmkmbNEo"
                ariaLabelId="diver-english"
              />
            </>
          )}
          {movie === MOVIES.DRUNK_NOTES && (
            <VideoPlayer
              title='Фильм "Записки по пьяни" (русская версия):'
              src="https://rutube.ru/play/embed/3857192a732537a20793ceecbc2ef504/"
              ariaLabelId="drunk-notes"
            />
          )}
          {movie === MOVIES.LINES_OF_CONTACT && (
            <VideoPlayer
              title='Фильм "Линии соприкосновения" (русская версия):'
              src="https://rutube.ru/play/embed/92c9c5e89fc285cebd1d607250e5489f"
              ariaLabelId="lines-of-contact"
            />
          )}
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default Videos
