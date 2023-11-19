import { api } from '../lib/axios'
import { IEvent } from '../types/event'

async function getEventById(id: string) {
  return await api.get<IEvent>(`/events/${id}`)
}

async function createEvent(event: IEvent) {
  await api.post<IEvent>('/events', { ...event })
}

const eventRepository = {
  getEventById,
  createEvent,
}

export default eventRepository
