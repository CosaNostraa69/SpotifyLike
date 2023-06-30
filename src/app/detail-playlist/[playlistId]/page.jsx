import React from 'react'
import PlaylistDetails from '../../components/PlaylistDetails' 
import { getSpotifyAuthToken } from '@/app/api/api'

export default async function DetailPage({params}) {
  const token = await getSpotifyAuthToken()
  
  return (
    <div>
<PlaylistDetails token={token} params={params.playlistId} />
    </div>
  )
}
