import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import appointmentRepository from '@/src/repositories/AppointmentRepository'
import InputErrorMessage from '../atoms/InputErrorMessage'
import { usePopup } from '@/src/Hooks/usePopup'

export interface FormData {
  appointmentTitle: string
  appointmentDate: string
  apointmentLocale: string
  apointmentTime: string
}

interface CreateAppointmentFormProps {
  eventId?: string
}

export function CreateAppointmentForm({ eventId }: CreateAppointmentFormProps) {
  const { closePopup } = usePopup()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    const appointmentData = {
      appointmentTitle: data.appointmentTitle,
      date: data.appointmentDate,
      locale: data.apointmentLocale,
      time: data.apointmentTime,
    }
    await appointmentRepository.createAppointment({
      appointmentData,
      eventId,
    })

    closePopup()
  }

  return (
    <>
      <div className="flex flex-row gap-6 py-6">
        <div className="w-2/4">
          <Input
            id="apointmentTitle"
            labelName="Título"
            placeholder="Casamento..."
            register={register('appointmentTitle', { required: true })}
          />
          {errors.appointmentTitle?.type === 'required' && (
            <InputErrorMessage>Título é obrigatório *</InputErrorMessage>
          )}
        </div>
        <div className="w-2/4">
          <Input
            id="appointmentDate"
            labelName="Data"
            type="date"
            register={register('appointmentDate', { required: true })}
          />
          {errors.appointmentDate?.type === 'required' && (
            <InputErrorMessage>Data é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-6 py-6 -mt-6">
        <div className="w-3/4">
          <Input
            id="apointmentLocale"
            labelName="Local"
            type="text"
            register={register('apointmentLocale', { required: true })}
          />
          {errors.apointmentLocale?.type === 'required' && (
            <InputErrorMessage>Local é obrigatório *</InputErrorMessage>
          )}
        </div>
        <div className="w-1/4">
          <Input
            id="apointmentTime"
            labelName="Horário"
            type="time"
            register={register('apointmentTime', { required: true })}
          />
          {errors.apointmentTime?.type === 'required' && (
            <InputErrorMessage>Horário é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
    </>
  )
}
