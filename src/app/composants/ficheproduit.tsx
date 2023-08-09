import React, { useState,useEffect } from 'react';
import { usePanier } from '../composants/panierContext';
import { useSearchParams } from 'next/navigation';
import produits from '../products.json';


const FicheProduit: React.FC = () => {

  const [count, setCount] = useState(1);
  const { ajouterAuPanier } = usePanier();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const selectedProduct = produits.find(product => product.id === id);

  useEffect(() => {
    if (!selectedProduct) {
      console.log('Produit non trouvé');
    }
  }, [selectedProduct]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleAjouterAuPanier = () => {
    if (selectedProduct) {
      ajouterAuPanier(count);
      console.log(`Produit "${selectedProduct.title}" ajouté au panier avec ${count} exemplaires.`);
    }
  };

  return (
    <div>
      {selectedProduct ? (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
          </div>
          <div>
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p>Prix : {selectedProduct.price} €</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <button onClick={handleDecrement} disabled={count === 1}>-</button>
              <p style={{ margin: '0 10px', minWidth: '30px', textAlign: 'center' }}>{count}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAjouterAuPanier}>Ajouter au panier</button>
          </div>
        </div>
      ) : (
        <div>Produit non trouvé</div>
      )}
    </div>
  );
};

export default FicheProduit;