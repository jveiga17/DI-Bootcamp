import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const images = [
  './img/hongkong.jpg',
  './img/macao.webp',
  './img/japan.webp',
  './img/lasvegas.webp',
];

const cities = ['Hong Kong', 'Macao', 'Japan', 'Las Vegas'];

function App() {
  return (
    <div className="carousel-container">
      {/* carousel comp from the carousel package */}
      <Carousel>  
        {images.map((path, index) => (
          <div key={index} className="carousel-item">
            <img src={process.env.PUBLIC_URL + path} alt={`City ${index + 1}`} />
            <div className="city-overlay">
              <p>{cities[index]}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
