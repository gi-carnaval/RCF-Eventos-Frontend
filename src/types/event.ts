export interface AppointmentProps {
  appointmentTitle: string
  date: string
  dayOfWeek: string // Aqui, a escolha entre Date ou string pode ser ajustada dependendo da manipulação dos dados
  eventId: string
  id: string
  locale: string
  time: string
}

export interface IEvent {
  id?: string
  hirer: string
  eventType: string
  Appointment?: AppointmentProps[]
}
