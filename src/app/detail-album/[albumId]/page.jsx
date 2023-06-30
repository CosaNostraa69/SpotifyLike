import React from 'react'
import AlbumDetails from '../../components/AlbumDetails'
import { getSpotifyAuthToken } from '@/app/api/api'

export default async function DetailPage({params}) {
  const token = await getSpotifyAuthToken()
  
  return (
    <div>
<AlbumDetails token={token} params={params.albumId} />
    </div>
  )
}
