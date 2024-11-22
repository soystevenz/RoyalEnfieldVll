"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    // Verifica si el pathname actual incluye el path deseado
    return pathname.startsWith(path);
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      // Cerrar el menú móvil si está abierto
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={`${styles.logo} flex-1`}>
              <a href='/'>
                <img src='/LOGO.png' alt='Logo' className={styles.logoImage} />
              </a>
            </div>
            <div className='hidden md:block'>
              <div className={styles.menuLinks}>
                <Link href="/motos" className={`${styles.menuLink} ${isActive('/motos') ? styles.activeLink : ''}`}>Motos</Link>
                <a href='#footer' onClick={scrollToFooter} className={styles.menuLink}>Encuéntranos</a>
                <Link href='/galeria' className={`${styles.menuLink} ${isActive('/galeria') ? styles.activeLink : ''}`}>Galería</Link>
                <Link href='/contactanos' className={`${styles.menuLink} ${isActive('/contactanos') ? styles.activeLink : ''}`}>Te Contactamos</Link>
                <a href='/' className={styles.virtualVisitButton}>Visita Virtual</a>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button className={styles.mobileMenuButton} onClick={toggleMenu}>
                {isOpen ? (
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'></path>
                  </svg>
                ) : (
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href='/motos' className={`${styles.mobileMenuLink} ${isActive('/motos') ? styles.activeLink : ''}`}>Motos</Link>
          <a href='#footer' onClick={scrollToFooter} className={styles.mobileMenuLink}>Encuéntranos</a>
          <Link href='/galeria' className={`${styles.mobileMenuLink} ${isActive('/galeria') ? styles.activeLink : ''}`}>Galería</Link>
          <Link href='/contactanos' className={`${styles.mobileMenuLink} ${isActive('/contactanos') ? styles.activeLink : ''}`}>Te Contactamos</Link>
          <a href='/' className={styles.virtualVisitButtonMobile}>Visita Virtual</a>
        </div>
      </nav>
      <div className={styles.headerSpacer}></div>
    </>
  );
};

export default Header;
