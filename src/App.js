import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import Authors from './components/Authors/Authors.js'
import About from './components/About/About.js'
import Reviews from './components/Reviews/Reviews.js'
import ImageGallery from './components/ImageGallery/ImageGallery.js'
import Movie from './components/Videos/Videos.js'
import Footer from './components/Footer/Footer.js'

const App = () => {
  return (
    <div>
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
