import { FullAppointmentProps } from './appointment'

export interface IEvent {
  id?: string
  hirer: string
  eventType: string
  appointment?: FullAppointmentProps[]
  photograficRegister: {
    id: string
    professionalQuantity: string
    photoAverage: string
    value: number
  }
}
