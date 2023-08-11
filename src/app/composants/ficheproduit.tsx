import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="general">
      <div className="description">
      <div className="selectedimage">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
      </div>
      <div className="aj">
        <h3>{selectedProduct.title}</h3>
        <p>Prix : {selectedProduct.price} €</p>
        <p>{selectedProduct.description}</p>
        <div className="btnprod">
        <input
  type="number"
  value={count}
  min="1"
  style={{ margin: '0 10px', minWidth: '30px', textAlign: 'center' }}
  onChange={event => setCount(parseInt(event.target.value))}
/>
  
          
          <button className="btnpanierprod" onClick={handleAjouterAuPanier}>Ajouter au panier</button>
          </div>
        </div>
                </div>
        
      
      <div className="ingredients">
        <h1>Ingredients</h1>
        <br/>
        <p>{selectedProduct.ingredients}</p>
        </div>
    </div>
  ) : (
    <div>Produit non trouvé</div>
  )}
</div>

  );
};

export default FicheProduit;