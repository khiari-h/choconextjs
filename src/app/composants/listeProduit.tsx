import React from 'react';
import Link from 'next/link';
import produits from '../products.json';
import '../globals.css'; // Assurez-vous de créer ce fichier CSS et de l'importer correctement

const ListeProduit: React.FC = () => {
  return (
    <div className="product-list">
      {produits.map(product => (
        <Link href={`/produit/${product.id}`} key={product.id}>
          <div className="product-thumbnail">
            <div className="thumbnail-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="thumbnail-details">
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
              <p>Notes:{product.note}</p>
              <button className="button-produit">Ajouter au panier</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListeProduit;
