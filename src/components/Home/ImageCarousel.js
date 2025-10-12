import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  require("../../Images/91A9A362-AD9D-4FB3-80A4-F3AC3274523D.JPG"),
  require("../../Images/IMG_1079.jpeg"),
  require("../../Images/IMG_1211.jpeg"),
  require("../../Images/IMG_1241.jpeg"),
  require("../../Images/IMG_7753.jpeg"),
  require("../../Images/IMG_7757.jpeg"),
  require("../../Images/readme-img.png"),
  require("../../Images/readme-img1.png")
];

function ImageCarousel() {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((src, idx) => (
        <div key={idx}>
          <img src={src} alt={`carousel-img-${idx}`} style={{maxHeight: '400px', objectFit: 'cover'}} />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
