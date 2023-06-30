"use client";

import { useState, useEffect } from "react";
import { fetchClientSpotifyApi } from "../api/api";

const PlaylistDetails = ({ token, params }) => {
  const [playlist, setAlbum] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      await fetchClientSpotifyApi(`playlists/${params}`, token)
        .then((response) => {
          setAlbum(response);
        })
        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la récupération des détails de la playlist :",
            error
          );
        });
    };
    fetch();
  }, [params]);



  if (!playlist) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="p-4 md:p-8 rounded-lg shadow-lg text-white mt-12 md:mt-20 border-2 border-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-start space-y-4 border-r md:border-r-0 border-white border-solid">
            <img
                className="w-full md:w-48 h-48 object-cover rounded-lg shadow mb-4 md:mb-0 border-2 border-white"
                src={playlist.images && playlist.images[0] ? playlist.images[0].url : ""}
                alt={playlist.name}
            />
            <h2 className="text-lg md:text-xl font-bold mb-2">{playlist.name}</h2>
            {playlist.artists && playlist.artists.length > 0 && (
                <p className="text-sm md:text-md mb-4">
                    Artiste :{" "}
                    <span className="font-semibold">{playlist.artists[0].name}</span>
                </p>
            )}
        </div>
        <div className="border-l md:border-l-0 border-white border-solid">
           
                </div>
        </div>
    </div>

  );
};

export default PlaylistDetails;
