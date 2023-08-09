'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import FicheProduit from '../../composants/ficheproduit';
import { AppProps } from 'next/app';
import { PanierProvider } from '../../composants/panierContext';
import Logo from '../images/logo.png';
import BoutonBoutique from '../../composants/boutonBoutique';
import BoutonPanier from '../../composants/boutonPanier';
import Footer from '../../composants/footer';
import BoutonAccueil from '../../composants/boutonAccueil';
import PanierCounter from '../../composants/panierCounter';




const Produit: React.FC = () => {
  return (
    <PanierProvider>
    <div className="Pages">
      <header className="App-header">
        <div className="bouton">
          <BoutonAccueil />
          <BoutonBoutique />
          <div className="panier-counter">
        <PanierCounter /> 
      </div>
          <BoutonPanier />
        </div>
      </header>  
     
      <div className="FicheProduit">
        <FicheProduit />
        </div> 
        
      <footer>
        <Footer />
      </footer>
    </div>
    </PanierProvider>
  );
};

export default Produit;
