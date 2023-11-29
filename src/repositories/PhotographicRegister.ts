import { api } from '../lib/axios'

async function deletePhotographicRegister(photographicRegisterId: string) {
  return await api.delete(`/photographicRegister/${photographicRegisterId}`)
}

export const photographicRegisterRepository = {
  deletePhotographicRegister,
}
