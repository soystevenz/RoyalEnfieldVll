"use client";

import { useState, useEffect } from 'react';
import { FaPhone, FaYoutube, FaInstagram, FaWhatsapp, FaFacebook, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [isMotorcycleOpen, setIsMotorcycleOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMotorcycleAccordion = () => {
    setIsMotorcycleOpen(!isMotorcycleOpen);
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
        {isMobile ? (
  <>
    <div 
      className={styles.sectionTitleContainer} 
      onClick={toggleMotorcycleAccordion}
    >
      <h3 className={styles.sectionTitle}>Motocicletas</h3>
      {isMotorcycleOpen ? <FaChevronUp className={styles.chevronIcon} /> : <FaChevronDown className={styles.chevronIcon} />}
    </div>
    <ul className={`${styles.motorcycles} ${isMotorcycleOpen ? styles.motorcyclesOpen : ''}`}>
      <li><a href='/motos/hntr-350'>Hntr 350</a></li>
      <li><a href='/motos/classic-350'>Clasic 350</a></li>
      <li><a href='/motos/meteor-350'>Meteor 350</a></li>
      <li><a href='/motos/scram-411'>Scram 411</a></li>
      <li><a href='/motos/himalayan-450'>New Himalayan 450</a></li>
      <li><a href='/motos/interceptor'>Interceptor</a></li>
      <li><a href='/motos/continental-gt'>Continental GT</a></li>
      <li><a href='/motos/shotgun-650'>Shotgun 650</a></li>
      <li><a href='/motos/super-meteor-650'>Super Meteor 650</a></li>
    </ul>
  </>
) : (
  <div>
    <h3 className={styles.sectionTitle}>Motocicletas</h3>
    <ul className={`${styles.motorcyclesDesktop}`}>
      <li><a href='/motos/hntr-350'>Hntr 350</a></li>
      <li><a href='/motos/classic-350'>Clasic 350</a></li>
      <li><a href='/motos/meteor-350'>Meteor 350</a></li>
      <li><a href='/motos/scram-411'>Scram 411</a></li>
      <li><a href='/motos/himalayan-450'>New Himalayan 450</a></li>
      <li><a href='/motos/interceptor'>Interceptor</a></li>
      <li><a href='/motos/continental-gt'>Continental GT</a></li>
      <li><a href='/motos/shotgun-650'>Shotgun 650</a></li>
      <li><a href='/motos/super-meteor-650'>Super Meteor 650</a></li>
    </ul>
  </div>
)}

        </div>
        <div>
          <h3 className={styles.sectionTitle}>Ubicación</h3>
          <h2 className={styles.sectionSubTitle}>Villavicencio</h2>
          <a 
            href="https://www.google.com/maps/place/ROYAL+ENFIELD/@4.1398442,-73.6394775,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3e2e0993a8e1ed:0xca7bc1c298ccedac!8m2!3d4.1398442!4d-73.6369026!16s%2Fg%2F11f15lwpcl?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Address}
          >
            Cra. 39 # 29 b 08 Barrio 7 de Agosto
          </a>
          <div className={styles.phoneContainer}>
            <FaPhone className={styles.phoneIcon}></FaPhone>
            <span>3118113280</span>
          </div>
          <br />
          <h2 className={styles.sectionSubTitle}>San Jose del Guaviare</h2>
          <a
            href="https://www.google.com/maps/place/ROYAL+ENFIELD+GUAVIARE/@2.5750417,-72.6365805,17z/data=!3m1!4b1!4m6!3m5!1s0x8e1777aace01e94d:0x2e4e75684e9e245b!8m2!3d2.5750417!4d-72.6340002!16s%2Fg%2F11t_wbmws7?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Address}
          >
            
            Calle 7 A #27 A 81 LC 1 M Barrio Belén de la Paz
          </a>
          <div className={styles.phoneContainer}>
            <FaPhone className={styles.phoneIcon}></FaPhone>
            <span>3185883164</span>
          </div>
        </div>
        <div className={`${styles.socialMediaColumn}`}>
  <h3 className={styles.sectionTitle}>Redes Sociales</h3>
  <ul className={styles.socialMedia}>
    <li>
      <a href="https://api.whatsapp.com/send/?phone=573118113280&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialLinkWhatsapp}`}>
        <FaWhatsapp /> <span>Whatsapp</span>
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/royalenfieldllanoscolombia?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialLinkFacebook}`}>
        <FaFacebook /> <span>Facebook</span>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/royalenfieldllanos?igsh=YjhqbzczOW0xbWU2" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialLinkInstagram}`}>
        <FaInstagram /> <span>Instagram</span>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@recolombia" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialLinkYoutube}`}>
        <FaYoutube /> <span>Youtube</span>
      </a>
    </li>
  </ul>
</div>
      </div>
      <div className={styles.footerBottom}>
        <p>©2024 Royal Enfield. Las imágenes aquí mostradas pueden diferir del producto real</p>
        <a href='https://royalenfieldco.com/politica-privacidad/'>Política de Privacidad | </a> <a href='https://fonts.google.com/specimen/Montserrat'>Términos y Condiciones</a>
      </div>
    </footer>
  );
}
