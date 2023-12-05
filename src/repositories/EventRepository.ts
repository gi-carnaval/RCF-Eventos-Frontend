import { api } from '../lib/axios'
import { CreateAlbumProps } from '../types/album'
import { CreatePhotographicRegisterProps, IEvent } from '../types/event'

async function getEventById(id: string) {
  return await api.get<IEvent>(`/event/${id}`)
}

async function createEvent(event: IEvent) {
  await api.post<IEvent>('/event', { ...event })
}

async function createEventPhotographicRegister(
  PhotographicRegister: CreatePhotographicRegisterProps,
) {
  await api.put<CreatePhotographicRegisterProps>(
    '/event/photographicRegister/create',
    {
      ...PhotographicRegister,
    },
  )
}
async function deleteEventPhotographicRegister(photographicRegisterId: string) {
  return await api.delete(
    `/event/photographicRegister/${photographicRegisterId}`,
  )
}

async function createEventAlbum(album: CreateAlbumProps) {
  await api.put<CreatePhotographicRegisterProps>('/event/album/create', {
    ...album,
  })
}

async function deleteEventAlbum(albumId: string) {
  await api.delete(`/event/album/${albumId}`)
}

// async function deleteEventPhotographicRegister(
//   photographicRegisterId: string,
//   eventId: string,
// ) {
//   return await api.delete(`/photographicRegister/${photographicRegisterId}`, {
//     eventId,
//   })
// }

async function getEventReport(eventId: string | undefined) {
  return await api.get(`/eventReport/pdf/${eventId}`, {
    responseType: 'arraybuffer',
  })
}

const eventRepository = {
  getEventById,
  createEvent,
  createEventPhotographicRegister,
  deleteEventPhotographicRegister,
  createEventAlbum,
  deleteEventAlbum, // deleteEventPhotographicRegister,
  getEventReport,
}

export default eventRepository
