import './ImageGallery.css'
import { DIVER_MOVIE_NAME, movieTitles, movieToFolderMap } from '../../utils/nameConstants'
import { useSearchParams } from 'react-router-dom'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'

const ImageGallery = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie') || DIVER_MOVIE_NAME

  const allImages = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,svg}', {
    eager: true
  })

  const currentFolder = movieToFolderMap[movie]
  const imageList = Object.entries(allImages)
    .filter(([path]) => path.includes(`/${currentFolder}/`))
    .map(([, module]) => module.default)

  const currentMovieTitle = movieTitles[movie]

  return (
    <div className="ImageGalleryWrapper">
      <MovieSelectionTabs />
      {!imageList.length ? (
        <p className="ImageGallery-empty">Изображения для этого фильма отсутствуют.</p>
      ) : (
        <div className="ImageGallery">
          {imageList.map((image, index) => (
            <img
              key={`${movie}-${index}`}
              src={image}
              alt={`Сцена из фильма ${currentMovieTitle} #${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
