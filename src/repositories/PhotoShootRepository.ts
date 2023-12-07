import { api } from '../lib/axios'
import { MakingOfProps } from '../types/makingOf'

async function updatePhotoShoot(photoShootData: MakingOfProps) {
  const updatedPhotoShootData = {
    value: photoShootData.value,
  }

  return await api.put(`/event/photoShoot/${photoShootData.id}`, {
    ...updatedPhotoShootData,
  })
}

export const PhotoShootRepository = {
  updatePhotoShoot,
}
