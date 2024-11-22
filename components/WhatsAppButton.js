// components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = ({ phoneNumber = "573118113280" }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-5 right-5 z-[1000] transition-transform duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/logowhtsp.png" // Añadido "/" al inicio para hacer la ruta absoluta
        alt="WhatsApp"
        className="w-20 h-20" 
      />
    </a>
  );
};

export default WhatsAppButton;