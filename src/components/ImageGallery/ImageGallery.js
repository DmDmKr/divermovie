import React from "react";
import './ImageGallery.css'

const images = require.context('../../assets/images', true);
const imageList = images.keys().map(image => images(image));

const ImageGallery = () => {
  return (
    <div className="ImageGallery">
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery