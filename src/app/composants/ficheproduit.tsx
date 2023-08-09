'use client';
import React, { useState } from 'react';
import { usePanier} from '../composants/panierContext';
import produit1 from '../images/produit1.jpg';

const FicheProduit: React.FC = () => {
  const [count, setCount] = useState(1);
  const { ajouterAuPanier } = usePanier();

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleAjouterAuPanier = () => {
    ajouterAuPanier(count);
    console.log(`Produit "Cerisier" ajouté au panier avec ${count} exemplaires.`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ marginRight: '20px' }}>
        <img src={produit1.src} alt="Cerisier" />
      </div>
      <div>
        <h3>Cerisier</h3>
        <p>Cerisier - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Prix : 2.99 €</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <button onClick={handleDecrement} disabled={count === 1}>
            -
          </button>
          <p style={{ margin: '0 10px', minWidth: '30px', textAlign: 'center' }}>{count}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAjouterAuPanier}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default FicheProduit;
