import React, { useState } from 'react';
import Link from 'next/link';
import produits from '../products.json';
import '../globals.css';

const ListeProduit: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [minNote, setMinNote] = useState<number | undefined>(undefined);
  const [maxNote, setMaxNote] = useState<number | undefined>(undefined);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setMinNote(undefined);
    setMaxNote(undefined);

    const categoryCheckboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  const filteredProducts = produits.filter(product => {
    // Filtrer par catégories sélectionnées
    if (selectedCategories.length > 0) {
      const selectedMatches = selectedCategories.some(cat => product.category[cat as keyof typeof product.category]);
      if (!selectedMatches) {
        return false;
      }
    }

    // Filtrer par prix minimum
    if (minPrice !== undefined && product.price < minPrice) {
      return false;
    }

    // Filtrer par prix maximum
    if (maxPrice !== undefined && product.price > maxPrice) {
      return false;
    }

    // Filtrer par note minimale
    if (minNote !== undefined && product.note < minNote) {
      return false;
    }

    // Filtrer par note maximale
    if (maxNote !== undefined && product.note > maxNote) {
      return false;
    }

    // Si toutes les conditions sont remplies, garder le produit dans la liste filtrée
    return true;
  });

  return (
    <div className="combined-component">
      <div className="filter-form">
      <div className="categories">Catégories</div>
          <div className="zone-filtre">
            {Object.keys(produits[0].category).map(category => (
              <div key={category}>
                <input
                  type="checkbox"
                  id={`ch-${category}`}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                <label htmlFor={`ch-${category}`} className="text-style4">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            ))}
          </div>
        
        <div>
          <div className="prix">Prix</div>
          <div className="zone-filtre">
            <div>
              <span className="text-style4">Prix min</span>
              <input
                type="number"
                id="prix-min"
                value={minPrice || ''}
                onChange={e => setMinPrice(e.target.value ? parseInt(e.target.value) : undefined)}
              />
            </div>
            <div>
              <span className="text-style4">Prix max</span>
              <input
                type="number"
                id="prix-max"
                value={maxPrice || ''}
                onChange={e => setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-style3">Notes</div>
          <div className="zone-filtre">
            <div>
              <span className="text-style4">Note min</span>
              <input
                type="number"
                id="note-min"
                value={minNote || ''}
                onChange={e => setMinNote(e.target.value ? parseInt(e.target.value) : undefined)}
              />
            </div>
            <div>
              <span className="text-style4">Note max</span>
              <input
                type="number"
                id="note-max"
                value={maxNote || ''}
                onChange={e => setMaxNote(e.target.value ? parseInt(e.target.value) : undefined)}
              />
            </div>
          </div>
      </div>
      <div className="reset-filters">
        <button onClick={handleResetFilters}>Réinitialiser</button>
      </div>
      </div>
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <Link href={`/boutiques/produits?id=${product.id}`} key={product.id}>
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
      
    </div>
  );
};

export default ListeProduit;
