import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import accueil1 from '/public/images/accueil1.jpg';
import accueil2 from '/public/images/accueil2.jpg';
import accueil3 from '/public/images/accueil3.jpg';

const MyCarousel: React.FC = () => {
  const images = [accueil1, accueil2, accueil3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNextImage, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-image">
      <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="button-container">
      <Link href="/boutiques">
        <button className="custom-button">VOIR LA BOUTIQUE</button>
      </Link>
    </div>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
