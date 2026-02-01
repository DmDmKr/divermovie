import YouTube from 'react-youtube'
import './Videos.css'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'

const Videos = () => {
  const { isDiver, isDrunkNotes } = useSelectedMovie()

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
        {isDiver && (
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
        {isDrunkNotes && (
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
