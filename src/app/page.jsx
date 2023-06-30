
import Link from "next/link";
import fetchSpotifyApi from "./api/api";
import Image from "next/image";

export default async function Home() {


      const albums = await fetchSpotifyApi(
        "browse/new-releases?country=FR&offset=0&limit=5"
      );

      const playlists = await fetchSpotifyApi(
        "browse/featured-playlists?country=FR&limit=5"
      );



  return (
    <div className="flex">
    <div className="h-screen w-80 bg-black mt-2">
        <div className="border-r border-white h-4/5 relative top-1/2 transform -translate-y-1/2">
          <div className="p-4 text-white">
            <h3 className="mb-4">Check your librairies</h3>

            <div className="bg-gray-600 p-4 rounded mb-4">
              <h4 className="mb-2 text-sm bg-gray-600">
                Add or remove songs in your playlist
              </h4>
              <Link
                className="text-xs py-2 px-4 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75"
                href="/lien-1"
              >
                My playlist
              </Link>
            </div>

            <div className="bg-gray-600 p-4 rounded">
              <h4 className="mb-2 text-sm bg-gray-600">
                Create your first playlist
              </h4>
              <Link
                className="text-xs py-2 px-4 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75"
                href="/lien-2"
              >
                Create playlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 p-8 text-white">
          <h1 className="text-2xl font-semibold">Bonjour, bienvenue sur ma page!</h1>
  
  
  <div>

  <div className="grid grid-cols-5 gap-4">
        {albums &&
      albums.albums.items.map((album) => (
        <div key={album.id} className="bg-black border border-solid border-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image 
            src={album.images[1].url}
            alt={album.name}
            width={100}
            height={100}
            className="w-full rounded-t-lg"
          />

          <div className="pt-4">
            <h3 className="font-semibold text-lg text-white">{album.name}</h3>
            <p className="text-sm text-gray-400">{album.artists[0].name}</p>
          </div>
        </div>
      ))}
  </div>

  <div className="mt-8">
    <Link
      className="inline-block bg-black border border-solid border-white text-white px-8 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
      href="/all-albums"
    >
      Voir tous les albums
    </Link>
  </div>
</div>

<div className="grid grid-cols-5 gap-4">
      {playlists &&
      playlists.playlists.items.map((item) => (
        <div key={item.id} className="bg-black border border-solid border-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image 
            src={item.images[0].url}
            alt={item.name}
            width={100}
            height={100}
            className="w-full rounded-t-lg"
          />

          <div className="pt-4">
            <h3 className="font-semibold text-lg text-white">{item.name}</h3>
            {/* <p className="text-sm text-gray-400">{item.track.artists[0].name}</p> */}
          </div>
        </div>
      ))}
  </div>

  <div className="mt-8">
    <Link
      className="inline-block bg-black border border-solid border-white text-white px-8 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
      href="/all-playlists"
    >
      Voir toutes les playlists
    </Link>
  </div>
  </div>
  
</div>







  );
}
