import React from 'react'
import fetchSpotifyApi from '../api/api'

export default async function Page() {
    const newReleases = await fetchSpotifyApi('browse/new-releases?country=FR&offset=0')
  return (
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
  )
}
