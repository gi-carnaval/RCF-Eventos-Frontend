export interface AppointmentProps {
  appointmentTitle: string
  date: string
  dayOfWeek?: string
  eventId?: string
  id?: string
  locale: string
  time: string
}

export interface IEvent {
  id?: string
  hirer: string
  eventType: string
  Appointment?: AppointmentProps[]
}
