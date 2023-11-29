import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'

interface FormProps {
  professionalQuantity: string
  photoAverage: string
  value: number
}

interface PhotographicRegisterCreateFormProps {
  eventId?: string
}

export function PhotographicRegisterCreateForm({
  eventId,
}: PhotographicRegisterCreateFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>()

  async function onSubmit(data: FormProps) {
    const photographicRegisterData = {
      professionalQuantity: data.professionalQuantity,
      photoAverage: data.photoAverage,
      value: data.value,
      eventId,
    }
    await eventRepository.createEventPhotographicRegister(
      photographicRegisterData,
    )
    closePopup()
  }

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex flex-row gap-6 items-end justify-center">
        <div className="w-1/3">
          <Input
            className="w-full"
            labelName="Quantidade de Profissionais"
            id="photograficRegister"
            type="text"
            register={register('professionalQuantity', { required: true })}
          />
          {errors.professionalQuantity?.type === 'required' && (
            <InputErrorMessage>Quantidade é obrigatório *</InputErrorMessage>
          )}
        </div>
        <div className="w-1/3">
          <Input
            className="w-full"
            labelName="Média de Fotos"
            id="photograficRegister"
            type="text"
            register={register('photoAverage', { required: true })}
          />
          {errors.photoAverage?.type === 'required' && (
            <InputErrorMessage>
              Média de fotos é obrigatório *
            </InputErrorMessage>
          )}
        </div>
        <div className="w-1/4">
          <Input
            className="w-full"
            labelName="Valor"
            id="photograficRegister"
            type="number"
            register={register('value', {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.value?.type === 'required' && (
            <InputErrorMessage>Valor é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
    </div>
  )
}
