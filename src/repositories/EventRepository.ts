import { api } from '../lib/axios'
import { CreatePhotographicRegisterProps, IEvent } from '../types/event'

async function getEventById(id: string) {
  return await api.get<IEvent>(`/events/${id}`)
}

async function createEvent(event: IEvent) {
  await api.post<IEvent>('/events', { ...event })
}

async function createEventPhotographicRegister(
  PhotographicRegister: CreatePhotographicRegisterProps,
) {
  await api.put<CreatePhotographicRegisterProps>(
    '/events/photographicRegister/create',
    {
      ...PhotographicRegister,
    },
  )
}

const eventRepository = {
  getEventById,
  createEvent,
  createEventPhotographicRegister,
}

export default eventRepository
