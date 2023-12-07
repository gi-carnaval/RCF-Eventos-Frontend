import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'

interface FormProps {
  value: number
}

interface MakingOfCreateFormProps {
  eventId?: string
}

export function MakingOfCreateForm({ eventId }: MakingOfCreateFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>()

  async function onSubmit(data: FormProps) {
    const makingOfData = {
      value: data.value,
      eventId,
    }
    await eventRepository.createEventMakingOf(makingOfData)
    closePopup()
  }

  return (
    <div className="flex flex-col gap-6 justify-center py-6">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <div className="w-2/4">
          <Input
            className="w-full"
            labelName="Valor do Making Of"
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
      <div className="flex gap-6 flex-row justify-center">
        <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
      </div>
    </div>
  )
}
