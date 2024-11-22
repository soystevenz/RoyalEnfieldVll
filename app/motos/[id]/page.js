import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './moto.module.css';
import WarrantyBadge from '@/components/WarrantyBadge';

// Datos de las motos
const motosData = {
  'hntr-350': {
    name: 'HNTR 350',
    mainImage: '/resources/motos/HNTR350/banner.webp',
    gallery: [
      '/resources/motos/HNTR350/1.webp',
      '/resources/motos/HNTR350/2.webp',
      '/resources/motos/HNTR350/3.webp'
    ],
    video: '/resources/motos/HNTR350/video.mp4',
    description: 'La HNTR 350 ha sido diseñada para brindarte una experiencia de manejo única y divertida, perfecta para aventurarte en la ciudad. Esta moto te ofrece estilo, poder y diversión pura. Anímate a descubrir tu ciudad en una HNTR 350',
    specs: {
      Motor: '349 CC MONOCILÍNDRICO',
      Potencia: '14,87 kW a 6100 rpm',
      Torque: '27 Nm @4000 RPM'
    }
  },
  'classic-350': {
    name: 'CLASSIC 350',
    mainImage: '/resources/motos/Classic350/banner.webp',
    gallery: [
      '/resources/motos/Classic350/1.webp',
      '/resources/motos/Classic350/2.webp',
      '/resources/motos/Classic350/3.webp'
    ],
    video: '/resources/motos/Classic350/video.mp4',
    description: 'La Classic 350 es un ícono atemporal que combina...',
    specs: {
      Motor: '350cc',
      Potencia: '20.2 HP @ 6100 rpm',
      Torque: '27 Nm @ 4000 rpm'
    }
  },
  'meteor-350': {
    name: 'METEOR 350',
    mainImage: '/resources/motos/Meteor/banner.webp',
    gallery: [
      '/resources/motos/Meteor/1.webp',
      '/resources/motos/Meteor/2.webp',
      '/resources/motos/Meteor/3.webp'
    ],
    video: '/resources/motos/Meteor/video.mp4',
    description: 'La Meteor representa la esencia de la conducción, el espíritu de la travesía, con un diseño clásico y atemporal. La Meteor está preparada para que sea tu moto en el día a día y para esos viajes del fin de semana.',
    specs: {
      Motor: '349 CC MONOCILÍNDRICO',
      Potencia: '20. 2 BHP @6100 RPM',
      Torque: '27 Nm @4000 RPM'
    }
  },
  'scram-411': {
    name: 'SCRAM 411',
    mainImage: '/resources/motos/Scram411/banner.webp',
    gallery: [
      '/resources/motos/Scram411/1.webp',
      '/resources/motos/Scram411/2.webp',
      '/resources/motos/Scram411/3.webp'
    ],
    video: '/resources/motos/Scram411/video.mp4',
    description: 'Royal Enfield lleva en su ADN la aventura del off-road, forjado por décadas de expediciones y miles de kilómetros en moto por los terrenos más complicados. La Scram 411 está pensada para la ciudad y construida con ese ADN.',
    specs: {
      Motor: '411 CC MONOCILÍNDRICO, 4 TIEMPOS.',
      Potencia: '17.88KW@6500RPM',
      Torque: '32 Nm @4250 RPM'
    }
  },
  'himalayan-450': {
    name: 'NEW HIMALAYAN 450',
    mainImage: '/resources/motos/NewHimalayan450/banner.webp',
    gallery: [
      '/resources/motos/NewHimalayan450/1.webp',
      '/resources/motos/NewHimalayan450/2.webp',
      '/resources/motos/NewHimalayan450/3.webp'
    ],
    video: '/resources/motos/NewHimalayan450/video.mp4',
    description: 'Royal Enfield lleva en su ADN la aventura del off-road, forjado por décadas de expediciones y miles de kilómetros en moto por los terrenos más complicados. La Scram 411 está pensada para la ciudad y construida con ese ADN.',
    specs: {
      Motor: '451.65 CC MONOCILÍNDRICO',
      Potencia: '40 BHP',
      Torque: '40 Nm @5500 RPM'
    }
  },
  'interceptor': {
    name: 'INTERCEPTOR',
    mainImage: '/resources/motos/Interceptor/banner.webp',
    gallery: [
      '/resources/motos/Interceptor/1.webp',
      '/resources/motos/Interceptor/2.webp',
      '/resources/motos/Interceptor/3.webp'
    ],
    video: '/resources/motos/Interceptor/video.mp4',
    description: 'Es una motocicleta pensada para viajar y es la compañera ideal también para el día a día en el pesado tráfico de las grandes ciudades. Este nuevo motor Twin de 650cc, te garantiza gran diversión en todo el rango de RPM.',
    specs: {
      Motor: '648 CC BICILÍNDRICO EN LÍNEA',
      Potencia: '34.9KW @ 7250 RPM',
      Torque: '52 Nm @5250 RPM'
    }
  },
  'continental-gt': {
    name: 'CONTINENTAL GT',
    mainImage: '/resources/motos/ContinentalGT/banner.webp',
    gallery: [
      '/resources/motos/ContinentalGT/1.webp',
      '/resources/motos/ContinentalGT/2.webp',
      '/resources/motos/ContinentalGT/3.webp'
    ],
    video: '/resources/motos/ContinentalGT/video.mp4',
    description: 'La nueva Continental GT 650 es una evolución del Continental GT 535, que a su vez, fue una evolución del Continental GT 250 – La original Royal Enfield British café racer. Impulsada por el nuevo motor 650 Twin, se parece en todo a su predecesor y funciona aún mucho mejor. Una joya clásica con gran tecnología.',
    specs: {
      Motor: '648 CC BICILÍNDRICO EN PARALELO',
      Potencia: '34.9 kW a 7250 RPM',
      Torque: '52 Nm @5250 RPM'
    }
  },
  'shotgun-650': {
    name: 'SHOTGUN 650',
    mainImage: '/resources/motos/Shotgun650/banner.webp',
    gallery: [
      '/resources/motos/Shotgun650/1.webp',
      '/resources/motos/Shotgun650/2.webp',
      '/resources/motos/Shotgun650/3.webp'
    ],
    video: '/resources/motos/Shotgun650/video.mp4',
    description: 'La Shotgun 650 escapa a cualquier intento de categorización, tanto en la forma como en el fondo. Su diseño modular le permite adoptar hasta tres configuraciones (monoplaza, biplaza y tourer con espacio para equipaje) con total facilidad. Cada una de sus variantes de colores bebe de la cultura custom y ofrece un lienzo en blanco para que tanto fabricantes expertos como motoristas principiantes den rienda suelta a su imaginación',
    specs: {
      Motor: '648 CC BICILÍNDRICO',
      Potencia: '34.6 kW @7250 rpm',
      Torque: '52.3 Nm @5650 RPM'
    }
  },
  'super-meteor-650': {
    name: 'SUPER METEOR 650',
    mainImage: '/resources/motos/SuperMeteor650/banner.webp',
    gallery: [
      '/resources/motos/SuperMeteor650/1.webp',
      '/resources/motos/SuperMeteor650/2.webp',
      '/resources/motos/SuperMeteor650/3.webp'
    ],
    video: '/resources/motos/SuperMeteor650/video.mp4',
    description: 'La Super Meteor 650 se ha construido sobre nuestra firme creencia de que las personas y los viajes no pueden limitarse a horas o kilómetros.',
    specs: {
      Motor: '648 CC BICILÍNDRICO EN PARALELO',
      Potencia: '34,6 kW @ 7250 rpm',
      Torque: '552.3 Nm @5650 RPM'

    }
  },

  // ... Agregar datos para las demás motos
};

export default function MotoPage({ params }) {
  const motoId = params.id;
  const motoInfo = motosData[motoId];

  if (!motoInfo) {
    return <div>Moto no encontrada</div>;
  }

  return (
    <div className="app">
      <Header />
      <WarrantyBadge />
      
      <main className={styles.main}>
        {/* Banner principal */}
        <div className={styles.fullWidthImage}>
          <img src={motoInfo.mainImage} alt={motoInfo.name} className={styles.mainImage} />
          <div className={styles.mainImageOverlay}>
            <h1>{motoInfo.name}</h1>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className={styles.gallery}>
          {motoInfo.gallery.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={image} alt={`${motoInfo.name} - Imagen ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Video promocional */}
        <div className={styles.videoSection}>
          <video 
            className={styles.video} 
            controls
            autoPlay
            muted
            playsInline
            poster={motoInfo.mainImage}
          >
            <source src={motoInfo.video} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        {/* Descripción y especificaciones */}
        <div className={styles.textImageSection}>
          <img src={motoInfo.gallery[0]} alt={motoInfo.name} className={styles.sideImage} />
          <div className={styles.textContent}>
            <h2>{motoInfo.name}</h2>
            <p>{motoInfo.description}</p>
            <div className={styles.specs}>
              <h3>Especificaciones Técnicas</h3>
              <ul>
                {Object.entries(motoInfo.specs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sección de solicitud */}
        <div className={styles.requestSection}>
          <p className={styles.requestText}>Solicita Precio y Ficha Técnica</p>
          
          <a href="https://api.whatsapp.com/send/?phone=573118113280&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <button className={styles.requestButton}>Solicitar</button>
          </a>
        </div>
       </main>

      <WhatsAppButton phoneNumber="573118113280" />
      <Footer />
    </div>
  );
}