import React from 'react'
import './ImageGallery.css'
import { diverMovieName, drunkNotesMovieName } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const ImageGallery = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')
  let images
  if (movie === diverMovieName || !movie) {
    images = require.context('../../assets/images/diver', true)
  }
  if (movie === drunkNotesMovieName) {
    images = require.context('../../assets/images/drunkNotes', true)
  }
  const imageList = images.keys().map(image => images(image))

  return (
    <div className="ImageGallery">
      <MovieSelectionTabs />
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} />
      ))}
    </div>
  )
}

export default ImageGallery
