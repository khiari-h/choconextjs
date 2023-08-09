// boutonBoutiques.tsx
import React from 'react';
import Link from 'next/link';

const BoutonBoutique: React.FC = () => {
  return (
    <div>
      <p>
        <Link href="/boutiques">Boutique</Link>
      </p>
    </div>
  );
};

export default BoutonBoutique;
