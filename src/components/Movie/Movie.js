import React from "react";
import YouTube from "react-youtube";
import "./Movie.css";

const Movie = () => {
  const options = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="Videos">
      <h2>Фильм "Ныряльщик" (русская версия):</h2>
      <YouTube videoId="auCTYCmSrw0" opts={options} onReady={onReady}></YouTube>
      <h2>"The Diver" movie (with English subtitles):</h2>
      <YouTube videoId="dktfmkmbNEo" opts={options} onReady={onReady}></YouTube>
    </div>
  );
};

export default Movie;
