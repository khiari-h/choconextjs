// panierContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Créer un contexte pour le panier
interface PanierContextType {
  panier: number;
  ajouterAuPanier: (nombreProduits: number) => void;
}

const PanierContext = createContext<PanierContextType | undefined>(undefined);

// Hook personnalisé pour accéder au contexte du panier
const usePanier = () => {
  const context = useContext(PanierContext);
  if (!context) {
    throw new Error('usePanier doit être utilisé dans un PanierProvider');
  }
  return context;
};

// Le composant du contexte du panier fournira l'état du panier et les fonctions pour le modifier
const PanierProvider = ({ children }: { children: ReactNode }) => {
  // Récupérer le panier depuis le stockage local lors du chargement du composant
  const [panier, setPanier] = useState(() => {
    const storedPanier = localStorage.getItem('panier');
    return storedPanier ? parseInt(storedPanier, 10) : 0;
  });

  // Sauvegarder le panier dans le stockage local à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('panier', panier.toString());
  }, [panier]);

  // Fonction pour ajouter des produits au panier
  const ajouterAuPanier = (nombreProduits: number) => {
    setPanier((prevPanier) => prevPanier + nombreProduits);
  };

  // Autres fonctions pour gérer le panier comme la suppression, la mise à jour, etc.

  const contextValue: PanierContextType = {
    panier,
    ajouterAuPanier,
  };

  return (
    <PanierContext.Provider value={contextValue}>
      {children}
    </PanierContext.Provider>
  );
};

export { PanierProvider, usePanier };
