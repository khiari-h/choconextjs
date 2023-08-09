import Link from 'next/link';
import '../globals.css';


const BoutonAccueil: React.FC= () => {
  return (
    <div>
      <p>
        <Link href="/">Accueil</Link>
      </p>
    </div>
  );
};

export default BoutonAccueil;
