import { api } from '../lib/axios'
import { AppointmentProps } from '../types/event'

interface CreateAppointmentProps {
  appointmentData: AppointmentProps
  eventId?: string
}

async function createAppointment({
  appointmentData,
  eventId,
}: CreateAppointmentProps) {
  console.log(eventId)
  return await api.post(`/appointment`, {
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
