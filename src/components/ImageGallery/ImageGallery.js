import React from 'react'
import './ImageGallery.css'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const ImageGallery = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')

  const imagePaths = {
    [DIVER_MOVIE_NAME]: require.context('../../assets/images/diver', true),
    [DRUNK_NOTES_MOVIE_NAME]: require.context('../../assets/images/drunkNotes', true)
  }

  const images = imagePaths[movie] || imagePaths[DIVER_MOVIE_NAME]
  const imageList = images.keys().map(image => images(image))

  if (!imageList.length) {
    return <p>No images available for this movie.</p>
  }

  return (
    <div className="ImageGallery">
      <MovieSelectionTabs />
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Сцена из фильма ${
            movie === DRUNK_NOTES_MOVIE_NAME ? 'Записки по-пьяни' : 'Ныряльщик'
          } #${index + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default ImageGallery
