import './ImageGallery.css'
import { movieTitles } from '../../utils/nameConstants'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'

const ImageGallery = () => {
  const { movie } = useSelectedMovie()

  const allImages = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,svg}', {
    eager: true
  })

  const filteredImages = Object.entries(allImages)
    .filter(([path]) => path.includes(`/${movie}/`))
    .map(([, module]) => module.default)

  const currentMovieTitle = movieTitles[movie]

  return (
    <div className="ImageGalleryWrapper">
      <MovieSelectionTabs />
      {!filteredImages.length ? (
        <p className="ImageGallery-empty">Изображения для этого фильма отсутствуют.</p>
      ) : (
        <div className="ImageGallery">
          {filteredImages.map((image, index) => (
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
