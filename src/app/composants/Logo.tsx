import React from 'react';
import logoImage from '/public/images/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logoImage.src} alt="Logo de l'entreprise" className="logo-image" />
    </div>
  );
};

export default Logo;