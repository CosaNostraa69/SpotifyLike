
import Link from "next/link";
import fetchSpotifyApi from "../api/api";
import Image from "next/image";

export default async function Home() {
  const playlists = await fetchSpotifyApi(
    "browse/featured-playlists?country=FR"
  );


  return (
    <div className="flex">
      <div className="flex-1 p-8 text-white">
        <div className="grid grid-cols-5 gap-4 mt-8">
          {playlists &&
            playlists.playlists.items.map((playlist) => (
              <Link href={`/detail-playlist/${playlist.id}`} key={playlist.id}>
              <div className="bg-black border border-solid border-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  width={100}
                  height={100}
                  className="w-full rounded-t-lg"
                />
            
                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-white">{playlist.name}</h3>
                  <p className="text-sm text-gray-400">{playlist.owner.display_name}</p>
                </div>
              </div>
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
