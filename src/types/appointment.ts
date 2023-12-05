export interface FullAppointmentProps {
  appointmentTitle: string
  date: string
  dayOfWeek: string
  eventId: string
  id: string
  locale: string
  time: string
}

export interface UpdateAppointmentProps {
  id: string
  appointmentTitle: string
  date: string
  locale: string
  time: string
}

export interface CreateAppointmentProps {
  appointmentTitle: string
  date: string
  locale: string
  time: string
}
