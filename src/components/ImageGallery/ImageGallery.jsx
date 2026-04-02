import './ImageGallery.css'
import { movieTitles } from '../../utils/nameConstants'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import { useSelectedMovie } from '../../hooks/useSelectedMovie'

const allImages = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

const imagesByMovie = {}
for (const [path, url] of Object.entries(allImages)) {
  const folder = path.split('/').at(-2)
  ;(imagesByMovie[folder] ??= []).push(url)
}

const ImageGallery = () => {
  const { movie } = useSelectedMovie()
  const images = imagesByMovie[movie] ?? []

  const currentMovieTitle = movieTitles[movie]

  return (
    <div className="ImageGalleryWrapper">
      <MovieSelectionTabs selectedMovie={movie} />
      {!images.length ? (
        <p className="ImageGallery-empty">Изображения для этого фильма отсутствуют.</p>
      ) : (
        <div className="ImageGallery">
          {images.map((image, index) => (
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
