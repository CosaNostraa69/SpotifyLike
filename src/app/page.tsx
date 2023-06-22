import Link from 'next/link';
import fetchSpotifyApi from './api/api';


export default async function Home() {
  const newReleases = await fetchSpotifyApi('browse/new-releases?country=FR&offset=0')
  return (
    <div className="flex">
      <div className="h-screen w-80 bg-black mt-2">
        <div className="border-r border-white h-4/5 relative top-1/2 transform -translate-y-1/2">
          <div className="p-4 text-white">
            <h3 className="mb-4">Check your librairies</h3>

            <div className="bg-gray-600 p-4 rounded mb-4">
              <h4 className="mb-2 text-sm bg-gray-600">Add or remove songs in your playlist</h4>
              <Link href="/lien-1" className="text-xs py-2 px-4 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75">My playlist</Link>
            </div>

            <div className="bg-gray-600 p-4 rounded">
              <h4 className="mb-2 text-sm bg-gray-600">Create your first playlist</h4>
              <Link href="/lien-2" className="text-xs py-2 px-4 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75">Create playlist</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 text-white">
        <h1>Bonjour, bienvenue sur ma page!</h1>
        <p>Ceci est la section de contenu principal.</p>

        {/* Carrousel de cartes */}
        <div className="grid grid-cols-5 gap-4 mt-8">
          {[1, 2, 3, 4, 5].map((card) => (
            <div key={card} className="bg-blue-500 p-4 rounded shadow-md">
              <h3 className="font-bold">Carte {card}</h3>
              <p>Contenu de la carte</p>
            </div>
          ))}
        </div>
      </div>

      <div >
     <h1>Sorties albums</h1>
     <ul>
        {newReleases.albums.items.map(album => (
            <li key={album.id}>
                <p>{album.name}</p>
            </li>

        ))}
     </ul>
    
    </div>

      <Link href={'./callback/page.jsx'} className='text-white'>WESH</Link>


    </div>
  );
}
