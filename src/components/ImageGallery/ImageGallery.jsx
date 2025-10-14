import { useState, useEffect } from 'react'
import './ImageGallery.css'
import { DRUNK_NOTES_MOVIE_NAME } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const ImageGallery = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    const loadImages = async () => {
      let images = {}

      if (movie === DRUNK_NOTES_MOVIE_NAME) {
        // Load drunk notes images
        images = import.meta.glob('../../assets/images/drunkNotes/*.{png,jpg,jpeg,svg}', {
          eager: true
        })
      } else {
        // Load diver images (default)
        images = import.meta.glob('../../assets/images/diver/*.{png,jpg,jpeg,svg}', { eager: true })
      }

      const imageUrls = Object.entries(images).map(([path, module]) => module.default)
      setImageList(imageUrls)
    }

    loadImages()
  }, [movie])

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
