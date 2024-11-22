"use client"
import * as React from "react"
import { useEffect, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import { Phone } from 'lucide-react'

import Header from "../components/Header"
import Footer from "../components/Footer"
import ImageCarrusel from '../components/ImageCarousel'
import WhatsAppButton from '@/components/WhatsAppButton'
import GallerySection from "@/components/GallerySection"
import './globals.css'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Royal Enfield Villavicencio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ImageCarrusel />
      
      {isMobile ? (
        <section className="photo-section">
          <h1>#ComparteTuRoyalEnfield</h1>
          <div className="responsive-image-container">
            <img 
              src="/uploads/glr1.jpg" 
              alt="Royal Enfield"
              className="responsive-image"
            />
            <div className="image-overlay">
              <h2>Únete a la Comunidad</h2>
              <p>Comparte tus mejores momentos con tu Royal Enfield</p>
              <Link href="/galeria">
                <button className="overlay-button">
                  Compartir
                </button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <GallerySection>
          <div className="photo-grid">
            <img src="/uploads/glr1.jpg" alt="Royal Enfield 1" />
            <img src="/uploads/glr2.jpg" alt="Royal Enfield 2" />
            <img src="/uploads/glr3.jpg" alt="Royal Enfield 3" />
          </div>
        </GallerySection>
      )}

      <div className="bg-[#1c1c1c] px-8 py-12 mt-9 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left">
            <div className="hidden md:block">
              <Phone size={48} className="text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">
                ¿Necesitas Ayuda para elegir tu próxima Royal Enfield?
              </h2>
              <p className="text-lg">
                Dejanos tus datos y nosotros te contactaremos
              </p>
            </div>
          </div>
          
          <Link href="/contactanos">
            <button className="w-full md:w-auto bg-[#ff0000] hover:bg-[#8b0000] text-white px-8 py-4 rounded text-lg font-semibold transition-colors duration-200 ease-in-out">
              Ingresa tus datos
            </button>
          </Link>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton phoneNumber="573118113280" />
    </div>
  )
}
/* // Enhanced mobile carousel component
const MobileImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageChange = (newIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  };

  const nextImage = () => {
    handleImageChange((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    handleImageChange((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="w-full pb-[100%] relative">
        <div className="absolute inset-0">
          <img 
            src={images[currentIndex]} 
            alt={`Royal Enfield ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
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
              onClick={() => handleImageChange(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; */