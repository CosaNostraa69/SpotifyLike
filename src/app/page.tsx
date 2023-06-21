import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen w-80 bg-black mt-2">
        {/* Bordure */}
        <div className="border-r border-white h-4/5 relative top-1/2 transform -translate-y-1/2">
          {/* Vous pouvez ajouter du contenu à la barre latérale ici */}
          <div className="p-4 text-white">
            <h3 className="mb-4">Titre de la sidebar</h3>

            {/* Carte 1 */}
            <div className="bg-gray-600 p-4 rounded mb-4">
              <h4 className="mb-2">Titre de la carte 1</h4>
          
                <Link href="/lien-1" className="inline-block px-4 py-2 bg-blue-500 rounded text-white">Voir plus</Link>
             
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-600 p-4 rounded">
              <h4 className="mb-2">Titre de la carte 2</h4>
           
                <Link href="/lien-2" className="inline-block px-4 py-2 bg-blue-500 rounded text-white">Voir plus</Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-8 text-white">
        {/* Vous pouvez ajouter du contenu principal ici */}
        <h1>Bonjour, bienvenue sur ma page!</h1>
        <p>Ceci est la section de contenu principal.</p>
      </div>
    </div>
  );
}
