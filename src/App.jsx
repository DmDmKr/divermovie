import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Authors from './components/Authors/Authors'
import About from './components/About/About'
import Reviews from './components/Reviews/Reviews'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Movie from './components/Videos/Videos'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className="AppWrapper">
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/authors" />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/videos" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
