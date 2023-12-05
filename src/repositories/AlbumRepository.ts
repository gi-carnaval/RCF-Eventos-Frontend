import { api } from '../lib/axios'
import { FullAlbumProps } from '../types/album'

async function updateAlbum(albumData: FullAlbumProps) {
  const updatedAlbumData = {
    size: albumData.size,
    albumCover: albumData.albumCover,
    pages: albumData.pages,
    value: albumData.value,
  }

  return await api.put(`/event/album/${albumData.id}`, {
    ...updatedAlbumData,
  })
}

export const albumRepository = {
  updateAlbum,
}
