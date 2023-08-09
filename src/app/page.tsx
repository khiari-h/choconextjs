'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import BoutiquePage from './boutiques/page';
import { AppProps } from 'next/app';
import { FaShoppingCart } from 'react-icons/fa';
import { PanierProvider } from './composants/panierContext';
import Logo from '../app/composants/Logo';
import MyCarousel from '../app/composants/carousel';
import BoutonBoutique from './composants/boutonBoutique';
import BoutonPanier from '../app/composants/boutonPanier';
import Footer from '../app/composants/footer';
import BoutonAccueil from './composants/boutonAccueil';
import PanierCounter from './composants/panierCounter';
import productData from './products.json';

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
      <div className="carousel">
        <MyCarousel />
      </div>  
    </div>
    <footer>
      <Footer />
    </footer>
    </PanierProvider>
  );
};

export default Pages;
