import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Authors from "./components/Authors/Authors.js";
import About from "./components/About/About.js";

const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        {/* Add more Route components for other routes */}
      </Routes>
    </div>
  );
};

export default App;
