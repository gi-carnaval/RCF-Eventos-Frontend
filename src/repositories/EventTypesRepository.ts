import { api } from '../lib/axios'
import { IEventTypes } from '../types/eventTypes'

async function getEventTypes() {
  return await api.get<IEventTypes[]>(`/eventTypes`)
}

async function createEventTypes(tipo: IEventTypes) {
  return await api.post<IEventTypes>(`/eventTypes`, {
    ...tipo,
  })
}

const eventTypesRepository = {
  getEventTypes,
  createEventTypes,
}

export default eventTypesRepository
