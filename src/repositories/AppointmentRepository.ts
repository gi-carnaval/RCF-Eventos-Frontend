import { api } from '../lib/axios'
import {
  CreateAppointmentProps,
  FullAppointmentProps,
} from '../types/appointment'

interface AppointmentProps {
  appointmentData: CreateAppointmentProps
  eventId?: string
}

async function getAppointmentById(id: string | undefined) {
  return await api.get<FullAppointmentProps>(`/appointment/${id}`)
}

async function deleteAppointment(id: string | undefined) {
  await api.delete(`/appointment/${id}`)
}

async function createAppointment({
  appointmentData,
  eventId,
}: AppointmentProps) {
  return await api.post(`/appointment`, {
    appointmentTitle: appointmentData.appointmentTitle,
    appointmentDate: appointmentData.date,
    appointmentLocale: appointmentData.locale,
    appointmentTime: appointmentData.time,
    eventId,
  })
}

const appointmentRepository = {
  getAppointmentById,
  createAppointment,
  deleteAppointment,
}

export default appointmentRepository
