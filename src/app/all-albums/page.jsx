import Link from "next/link";
import fetchSpotifyApi from "../api/api";
import Image from "next/image";

export default async function Home() {
  const albums = await fetchSpotifyApi("browse/new-releases?country=FR&offset=0");

  return (
    <div className="flex">
      <div className="flex-1 p-8 text-white">
        <div className="grid grid-cols-5 gap-4 mt-8">
          {albums &&
            albums.albums.items.map((album) => (
              <Link href={`/detail-album/${album.id}`} key={album.id}>
              <div className="bg-black border border-solid border-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
