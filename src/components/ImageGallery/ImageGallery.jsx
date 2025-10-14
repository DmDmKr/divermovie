import { useState, useEffect } from 'react'
import './ImageGallery.css'
import { DIVER_MOVIE_NAME, movieTitles, movieToFolderMap } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const ImageGallery = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie') || DIVER_MOVIE_NAME
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    const loadImages = async () => {
      const allImages = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,svg}', {
        eager: true
      })

      const currentFolder = movieToFolderMap[movie]

      const filteredImages = Object.entries(allImages)
        .filter(([path]) => path.includes(`/${currentFolder}/`))
        .map(([, module]) => module.default)

      setImageList(filteredImages)
    }

    loadImages()
  }, [movie])

  const currentMovieTitle = movieTitles[movie]

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
          alt={`Сцена из фильма ${currentMovieTitle} #${index + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default ImageGallery
