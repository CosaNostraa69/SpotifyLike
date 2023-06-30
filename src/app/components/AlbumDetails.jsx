"use client";

import { useState, useEffect } from "react";
import { fetchClientSpotifyApi } from "../api/api";

const AlbumDetails = ({ token, params }) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      await fetchClientSpotifyApi(`albums/${params}`, token)
        .then((response) => {
          setAlbum(response);
        })
        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la récupération des détails de l'album :",
            error
          );
        });
    };
    fetch();
  }, [params]);

  const convertDuration = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  if (!album) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="p-4 md:p-8 rounded-lg shadow-lg text-white mt-12 md:mt-20 border-2 border-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-start space-y-4 border-r md:border-r-0 border-white border-solid">
            <img
                className="w-full md:w-48 h-48 object-cover rounded-lg shadow mb-4 md:mb-0 border-2 border-white"
                src={album.images && album.images[0] ? album.images[0].url : ""}
                alt={album.name}
            />
            <h2 className="text-lg md:text-xl font-bold mb-2">{album.name}</h2>
            {album.artists && album.artists.length > 0 && (
                <p className="text-sm md:text-md mb-4">
                    Artiste :{" "}
                    <span className="font-semibold">{album.artists[0].name}</span>
                </p>
            )}
        </div>
        <div className="border-l md:border-l-0 border-white border-solid">
            {album.tracks && album.tracks.items && (
                <div className="h-60 overflow-y-auto border-2 border-white p-2 rounded-md scrollbar scrollbar-thumb-blue-500 scrollbar-thin">
                    <h3 className="text-md md:text-lg font-semibold mb-2">Playlist:</h3>
                    <ol className="list-decimal list-inside text-xs md:text-sm">
                        {album.tracks.items.map((track) => (
                            <li className="mb-1 border-b border-white p-1" key={track.id}>
                                {track.name} - {convertDuration(track.duration_ms)}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    </div>
</div>

  );
};

export default AlbumDetails;
