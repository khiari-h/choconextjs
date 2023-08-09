import React from 'react';
import LogoPanier from '/public/images/panier.png';

const BoutonPanier: React.FC = () => {
  const urlPanier = '/panier';
  
  return (
    <a href={urlPanier}>
        <img src={LogoPanier.src} alt="Bouton panier" className='btnpanier' />
    </a>
  );
};

export default BoutonPanier;
