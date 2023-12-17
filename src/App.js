import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Authors from "./components/Authors/Authors.js";
import About from "./components/About/About.js";
import Reviews from "./components/Reviews/Reviews.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";

const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        {/* Add more Route components for other routes */}
      </Routes>
    </div>
  );
};

export default App;
