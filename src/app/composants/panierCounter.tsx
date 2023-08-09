import React from 'react';
import { usePanier } from './panierContext';
import { FaShoppingCart } from 'react-icons/fa';

const PanierCounter: React.FC = () => {
  const { panier } = usePanier();

  return (
    <div>
      <span style={{ marginRight: '8px' }}>
        <FaShoppingCart size={20} />
      </span>
      {panier}
    </div>
  );
};

export default PanierCounter;
