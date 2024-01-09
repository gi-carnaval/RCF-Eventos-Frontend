import { FullAlbumProps } from './album'
import { FullAppointmentProps } from './appointment'
import { InstallmentsProps } from './installments'
import { MakingOfProps } from './makingOf'
import { PhotoPanelProps } from './photoPanel'
import { PhotoShootProps } from './photoShoot'

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
  totalValue?: number
  appointment?: FullAppointmentProps[]
  photographicRegister?: PhotographicRegisterProps
  album?: FullAlbumProps
  makingOf?: MakingOfProps
  photoShoot?: PhotoShootProps
  photoPanel?: PhotoPanelProps
  installments?: InstallmentsProps[]
}
