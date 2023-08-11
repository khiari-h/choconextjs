'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AppProps } from 'next/app';
import { PanierProvider } from '../composants/panierContext';
import Logo from '../composants/Logo';
import BoutonBoutique from '../composants/boutonBoutique';
import BoutonPanier from '../composants/boutonPanier';
import Footer from '../composants/footer';
import BoutonAccueil from '../composants/boutonAccueil';
import PanierCounter from '../composants/panierCounter';
import FicheProduit from '../composants/ficheproduit';
import ListeProduit from '../composants/listeProduit';
import produits from '../products.json';


const Pages: React.FC = () => {


  return (
    <PanierProvider>
    <div className="Pages">
      <header className="App-header">
      <div className="logo-container">
          <Logo />
        </div>
        <div className="bouton">
          <BoutonAccueil />
          <BoutonBoutique />
          <div className="panier-counter">
        <PanierCounter /> 
      </div>
          <BoutonPanier />
        </div>
      </header>
      <div className="contprod">
     
      <div className="ListeProduit">
<ListeProduit />
</div>
</div>
      <footer>
        <Footer />
      </footer>
    </div>
    </PanierProvider>
  );
};

export default Pages;
