import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
// import { Button } from '../atoms/Button'
import appointmentRepository from '@/src/repositories/AppointmentRepository'
import InputErrorMessage from '../atoms/InputErrorMessage'
import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import { FullAppointmentProps } from '@/src/types/appointment'
import dayjs from 'dayjs'

export interface FormData {
  appointmentTitle: string
  date: string
  locale: string
  time: string
}

interface EditAppointmentFormProps {
  appointmentId: string
}

export function EditAppointmentForm({
  appointmentId,
}: EditAppointmentFormProps) {
  const [appointment, setAppointment] = useState<FullAppointmentProps>()

  async function fetchAppointmentData(appointmentId: string) {
    const res = await appointmentRepository.getAppointmentById(appointmentId)
    setAppointment(res.data)
  }
  const { closePopup } = usePopup()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>()

  appointment && setValue('appointmentTitle', appointment?.appointmentTitle)
  appointment && setValue('date', dayjs(appointment?.date).format('YYYY-MM-DD'))
  appointment && setValue('locale', appointment?.locale)
  appointment && setValue('time', appointment?.time)

  async function onSubmit(data: FormData) {
    await appointmentRepository.updateAppointment(data, appointmentId)
    closePopup()
  }

  async function excludeAppointment() {
    if (confirm('Confirmar exclusão do compromisso?')) {
      await appointmentRepository.deleteAppointment(appointmentId)
      closePopup()
    }
  }

  useEffect(() => {
    fetchAppointmentData(appointmentId)
  }, [appointmentId])

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
            register={register('date', { required: true })}
          />
          {errors.date?.type === 'required' && (
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
            register={register('locale', { required: true })}
          />
          {errors.locale?.type === 'required' && (
            <InputErrorMessage>Local é obrigatório *</InputErrorMessage>
          )}
        </div>
        <div className="w-1/4">
          <Input
            id="apointmentTime"
            labelName="Horário"
            type="time"
            register={register('time', { required: true })}
          />
          {errors.time?.type === 'required' && (
            <InputErrorMessage>Horário é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <div className="flex gap-6 flex-row justify-center">
        <Button onClick={() => handleSubmit(onSubmit)()}>Atualizar</Button>
        <Button onClick={excludeAppointment}>Excluir</Button>
      </div>
    </>
  )
}
