import YouTube from 'react-youtube'
import './Videos.css'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'
import { MOVIES } from '../../utils/nameConstants'

const VIDEO_OPTIONS = {
  height: '500',
  width: '800',
  playerVars: {
    autoplay: 0,
    controls: 1
  }
}

const handlePlayerReady = event => {
  event.target.pauseVideo()
}

const Videos = () => {
  const { movie } = useSelectedMovie()

  return (
    <div className="VideosWrapper">
      <MovieSelectionTabs selectedMovie={movie} />
      <ErrorBoundary fallbackMessage="Не удалось загрузить видеоплеер. Проверьте подключение к интернету.">
        <div className="Videos" role="region" aria-label="Видеоплеер">
          {movie === MOVIES.DIVER && (
            <>
              <h2 id="diver-russian">Фильм "Ныряльщик" (русская версия):</h2>
              <YouTube
                videoId="auCTYCmSrw0"
                opts={VIDEO_OPTIONS}
                onReady={handlePlayerReady}
                title="Фильм Ныряльщик на русском языке"
                aria-labelledby="diver-russian"
              />
              <h2 id="diver-english">"The Diver" movie (with English subtitles):</h2>
              <YouTube
                videoId="dktfmkmbNEo"
                opts={VIDEO_OPTIONS}
                onReady={handlePlayerReady}
                title="The Diver movie with English subtitles"
                aria-labelledby="diver-english"
              />
            </>
          )}
          {movie === MOVIES.DRUNK_NOTES && (
            <>
              <h2 id="drunk-notes">Фильм "Записки по пьяни" (русская версия):</h2>
              <YouTube
                videoId="L2lkHGfX8JI"
                opts={VIDEO_OPTIONS}
                onReady={handlePlayerReady}
                title="Фильм Записки по пьяни"
                aria-labelledby="drunk-notes"
              />
            </>
          )}
          {movie === MOVIES.LINES_OF_CONTACT && (
            <>
              <h2 id="lines-of-contact">Фильм "Линии соприкосновения" (русская версия):</h2>
              <YouTube
                videoId="vkO_EOuDZsI"
                opts={VIDEO_OPTIONS}
                onReady={handlePlayerReady}
                title="Фильм Линии соприкосновения"
                aria-labelledby="lines-of-contact"
              />
            </>
          )}
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default Videos
