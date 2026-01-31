import YouTube from 'react-youtube'
import './Videos.css'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/nameConstants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const Videos = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')

  const options = {
    height: '500',
    width: '800',
    playerVars: {
      autoplay: 0,
      controls: 1
    }
  }

  const onReady = event => {
    event.target.pauseVideo()
  }

  return (
    <div className="VideosWrapper">
      <MovieSelectionTabs />
      <div className="Videos" role="region" aria-label="Видеоплеер">
        {(movie === DIVER_MOVIE_NAME || !movie) && (
          <>
            <h2 id="diver-russian">Фильм "Ныряльщик" (русская версия):</h2>
            <YouTube
              videoId="auCTYCmSrw0"
              opts={options}
              onReady={onReady}
              title="Фильм Ныряльщик на русском языке"
              aria-labelledby="diver-russian"
            />
            <h2 id="diver-english">"The Diver" movie (with English subtitles):</h2>
            <YouTube
              videoId="dktfmkmbNEo"
              opts={options}
              onReady={onReady}
              title="The Diver movie with English subtitles"
              aria-labelledby="diver-english"
            />
          </>
        )}
        {movie === DRUNK_NOTES_MOVIE_NAME && (
          <>
            <h2 id="drunk-notes">Фильм "Записки по пьяни" (русская версия):</h2>
            <YouTube
              videoId="L2lkHGfX8JI"
              opts={options}
              onReady={onReady}
              title="Фильм Записки по пьяни"
              aria-labelledby="drunk-notes"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Videos
