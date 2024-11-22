import React from 'react';

const WarrantyBadge = () => {
  const badgeStyles = {
    position: 'fixed',
    top: '50px',
    left: '-3px',
    zIndex: 1000,
    width: '200px',
    height: 'auto',
    
    '@media (max-width: 768px)': {
      width: '120px',
      top: '120px'
    },
    '@media (max-width: 480px)': {
      width: '100px',
      top: '100px'
    }
  };

  // Creamos los estilos CSS en un string para los media queries
  const styleSheet = `
    .warranty-badge {
      position: fixed;
      top: 50px;
      left: -3px;
      z-index: 1000;
      width: 200px;
      height: auto;
     
    }

    @media (max-width: 768px) {
      .warranty-badge {
        width: 170px;
        top: 50px;
      }
    }

    @media (max-width: 480px) {
      .warranty-badge {
        width: 140px;
        top: 55px;
      }
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <img 
        src="/GarantiaLogo.png" 
        alt="Garantía 3 años sin límite de KMs" 
        className="warranty-badge"
      />
    </>
  );
};

export default WarrantyBadge;

