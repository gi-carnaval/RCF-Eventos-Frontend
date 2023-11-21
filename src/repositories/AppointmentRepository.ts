import { api } from '../lib/axios'
import { AppointmentProps } from '../types/event'

interface CreateAppointmentProps {
  appointmentData: AppointmentProps
  eventId: string
}

async function createAppointment({
  eventId,
  appointmentData,
}: CreateAppointmentProps) {
  return await api.post<AppointmentProps>(`/appointment/`, {
    appointmentTitle: appointmentData.appointmentTitle,
    appointmentDate: appointmentData.date,
    appointmentLocale: appointmentData.locale,
    appointmentTime: appointmentData.time,
    eventId,
  })
}

const appointmentRepository = {
  createAppointment,
}

export default appointmentRepository
