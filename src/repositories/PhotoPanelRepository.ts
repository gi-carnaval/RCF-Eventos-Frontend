import { api } from '../lib/axios'
import { PhotoPanelProps } from '../types/photoPanel'

async function updatePhotoPanel(photoPanelData: PhotoPanelProps) {
  const updatedPhotoPanelData = {
    value: photoPanelData.value,
  }

  return await api.put(`/event/photoPanel/${photoPanelData.id}`, {
    ...updatedPhotoPanelData,
  })
}

export const PhotoPanelRepository = {
  updatePhotoPanel,
}
