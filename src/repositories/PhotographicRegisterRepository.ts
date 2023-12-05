import { api } from '../lib/axios'
import { PhotographicRegisterProps } from '../types/event'

async function updatePhotographicRegister(
  photographicRegisterData: PhotographicRegisterProps,
) {
  const updatedPhotographicRegisterData = {
    professionalQuantity: photographicRegisterData.professionalQuantity,
    photoAverage: photographicRegisterData.photoAverage,
    value: photographicRegisterData.value,
  }

  return await api.put(
    `/event/photographicRegister/${photographicRegisterData.id}`,
    {
      ...updatedPhotographicRegisterData,
    },
  )
}

export const photographicRegisterRepository = {
  updatePhotographicRegister,
}
