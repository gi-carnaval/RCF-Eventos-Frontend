import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import ConfirmFormButton from '../atoms/ConfirmFormButton'
import appointmentRepository from '@/src/repositories/AppointmentRepository'

export interface FormData {
  appointmentTitle: string
  appointmentDate: string
  apointmentLocale: string
  apointmentTime: string
}

export default function CreateAppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    await appointmentRepository.createAppointment(data)
  }

  return (
    <>
      <div className="flex flex-row gap-6 py-6">
        <Input
          id="apointmentTitle"
          labelName="Título"
          placeholder="Casamento..."
          inputSize="50%"
          register={register('appointmentTitle', { required: true })}
        />
        <Input
          id="apointmentDate"
          labelName="Data"
          type="date"
          inputSize="50%"
          register={register('appointmentDate', { required: true })}
        />
      </div>
      <div className="flex flex-row gap-6 py-6 -mt-6">
        <Input
          id="apointmentLocale"
          labelName="Local"
          type="text"
          inputSize="75%"
          register={register('apointmentLocale', { required: true })}
        />
        <Input
          id="apointmentTime"
          labelName="Horário"
          type="time"
          inputSize="25%"
          register={register('apointmentTime', { required: true })}
        />
      </div>
      <ConfirmFormButton onClick={() => handleSubmit(onSubmit)()} />
    </>
  )
}
