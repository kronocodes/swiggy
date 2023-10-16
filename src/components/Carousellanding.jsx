import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="">
      <div className="">
        <img className='max-h-[720px]' src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      </div>
    </div>
  );
};

export default Carousel;