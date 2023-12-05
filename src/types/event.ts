import { FullAlbumProps } from './album'
import { FullAppointmentProps } from './appointment'

export interface CreatePhotographicRegisterProps {
  professionalQuantity: string
  photoAverage: string
  value: number
}

export interface PhotographicRegisterProps {
  id: string
  professionalQuantity: string
  photoAverage: string
  value: number
}

export interface IEvent {
  id?: string
  hirer: string
  eventType: string
  appointment?: FullAppointmentProps[]
  photographicRegister?: PhotographicRegisterProps
  album?: FullAlbumProps
}
