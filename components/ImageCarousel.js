import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    { 
      desktop: "/resources/1.webp",
      mobile: "/resources/1.webp",
    },
    { 
      desktop: "/resources/2.webp",
      mobile: "/resources/2.webp",
    },
    { 
      desktop: "/resources/3.webp",
      mobile: "/resources/3.webp",
    },
    { 
      desktop: "/resources/4.webp",
      mobile: "/resources/4.webp",
    },
    { 
      desktop: "/resources/5.webp",
      mobile: "/resources/5.webp",
    },
  ];

  const changeImage = (newIndex, newDirection) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setDirection(newDirection);
  };

  const nextImage = () => {
    changeImage((activeIndex + 1) % images.length, 'next');
  };

  const prevImage = () => {
    changeImage((activeIndex - 1 + images.length) % images.length, 'prev');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(loadTimer);
  }, []);

  // Nuevo useEffect para el autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextImage();
      }
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [activeIndex, isAnimating]);

  return (
    <div className="relative w-full h-[60vw] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      <div className={`w-full h-full transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out
              ${index === activeIndex ? 'z-20' : 'z-10'}
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
              ${
                direction === 'next'
                  ? index === prevIndex
                    ? '-translate-x-full'
                    : index === activeIndex
                    ? 'translate-x-0'
                    : 'translate-x-full'
                  : index === prevIndex
                  ? 'translate-x-full'
                  : index === activeIndex
                  ? 'translate-x-0'
                  : '-translate-x-full'
              }
              md:${
                index === activeIndex
                  ? 'scale-100 opacity-100 translate-x-0'
                  : index === prevIndex
                  ? 'scale-110 opacity-0'
                  : 'opacity-0 scale-110'
              }
            `}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={image.desktop} />
              <img
                src={image.mobile}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Previous image"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Next image"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index, index > activeIndex ? 'next' : 'prev')}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to image ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;