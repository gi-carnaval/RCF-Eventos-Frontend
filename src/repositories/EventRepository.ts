import { api } from '../lib/axios'
import { CreateAlbumProps } from '../types/album'
import { CreatePhotographicRegisterProps, IEvent } from '../types/event'
import { CreateMakingOfProps } from '../types/makingOf'
import { CreatePhotoPanelProps } from '../types/photoPanel'
import { CreatePhotoShootProps } from '../types/photoShoot'

async function getEventById(id: string) {
  return await api.get<IEvent>(`/event/${id}`)
}

async function createEvent(event: IEvent) {
  await api.post<IEvent>('/event', { ...event })
}

async function getEventReport(eventId: string | undefined) {
  return await api.get(`/eventReport/pdf/${eventId}`, {
    responseType: 'arraybuffer',
  })
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
  await api.put<CreateAlbumProps>('/event/album/create', {
    ...album,
  })
}

async function deleteEventAlbum(albumId: string) {
  await api.delete(`/event/album/${albumId}`)
}

async function createEventPhotoShoot(photoShoot: CreatePhotoShootProps) {
  await api.put<CreatePhotoShootProps>('/event/photoShoot/create', {
    ...photoShoot,
  })
}

async function deleteEventPhotoShoot(photoShootId: string) {
  await api.delete(`/event/photoShoot/${photoShootId}`)
}

async function createEventMakingOf(makingOf: CreateMakingOfProps) {
  await api.put<CreateMakingOfProps>('/event/makingOf/create', {
    ...makingOf,
  })
}

async function deleteEventMakingOf(makingOfId: string) {
  await api.delete(`/event/makingOf/${makingOfId}`)
}

async function createEventPhotoPanel(photoPanel: CreatePhotoPanelProps) {
  await api.put<CreatePhotoPanelProps>('/event/photoPanel/create', {
    ...photoPanel,
  })
}

async function deleteEventPhotoPanel(photoPanelId: string) {
  await api.delete(`/event/photoPanel/${photoPanelId}`)
}

const eventRepository = {
  getEventById,
  createEvent,
  getEventReport,
  createEventPhotographicRegister,
  deleteEventPhotographicRegister,
  createEventAlbum,
  deleteEventAlbum,
  createEventPhotoShoot,
  deleteEventPhotoShoot,
  createEventMakingOf,
  deleteEventMakingOf,
  createEventPhotoPanel,
  deleteEventPhotoPanel,
}

export default eventRepository
