import React, { useState } from 'react';
import Link from 'next/link';

const GallerySection = ({ isMobile, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center px-4">
      <div 
        className="relative flex flex-col items-center my-16 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-4xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#ff0000] text-center max-w-2xl">
          #ComparteTuRoyalEnfield
        </h1>
        
        <div className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-3
          bg-black text-white p-6 rounded-lg shadow-lg z-50
          w-80 text-center transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}>
          <div className="absolute top-0 left-0 w-full h-8 -translate-y-full bg-transparent" />
          <h3 className="text-xl font-bold mb-2">¡Únete a nuestra comunidad!</h3>
          <p className="mb-4">Descubre las increíbles historias de nuestros riders y comparte tu propia aventura</p>
          <Link href="/galeria" className="block">
            <button className="w-full bg-[#ff0000] hover:bg-[#8b0000] text-white px-6 py-2 rounded-md transition-colors duration-200">
              Entra Aquí
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default GallerySection;