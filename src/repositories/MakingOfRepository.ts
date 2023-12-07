import { api } from '../lib/axios'
import { MakingOfProps } from '../types/makingOf'

async function updateMakingOf(makingOfData: MakingOfProps) {
  const updatedAlbumData = {
    value: makingOfData.value,
  }

  return await api.put(`/event/makingOf/${makingOfData.id}`, {
    ...updatedAlbumData,
  })
}

export const makingOfRepository = {
  updateMakingOf,
}
