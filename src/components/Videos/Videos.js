import React from 'react'
import YouTube from 'react-youtube'
import './Videos.css'
import { diverMovieName, drunkNotesMovieName } from '../../utils/name_constants'
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
    <div className="Videos">
      <MovieSelectionTabs />
      {(movie === diverMovieName || !movie) && (
        <>
          <h2>Фильм "Ныряльщик" (русская версия):</h2>
          <YouTube videoId="auCTYCmSrw0" opts={options} onReady={onReady}></YouTube>
          <h2>"The Diver" movie (with English subtitles):</h2>
          <YouTube videoId="dktfmkmbNEo" opts={options} onReady={onReady}></YouTube>
        </>
      )}
      {movie === drunkNotesMovieName && (
        <>
          <h2>Фильм "Записки по пьяни" (русская версия):</h2>
          <YouTube videoId="L2lkHGfX8JI" opts={options} onReady={onReady}></YouTube>
        </>
      )}
    </div>
  )
}

export default Videos
