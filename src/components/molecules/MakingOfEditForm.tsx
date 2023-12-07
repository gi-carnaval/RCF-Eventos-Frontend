import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'
import { makingOfRepository } from '@/src/repositories/MakingOfRepository'
import { MakingOfProps } from '@/src/types/makingOf'

interface FormProps {
  size: string
  pages: string
  albumCover: string
  value: number
}

interface MakingOfEditFormProps {
  makingOfDatas: MakingOfProps
}

export function MakingOfEditForm({ makingOfDatas }: MakingOfEditFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      value: makingOfDatas.value,
    },
  })

  async function onSubmit(data: FormProps) {
    const makingOfData = {
      id: makingOfDatas.id,
      value: data.value,
    }
    await makingOfRepository.updateMakingOf(makingOfData)
    closePopup()
  }

  async function deleteAlbumDatas(makingOfId: string) {
    if (confirm('Confirmar exclusão do Making Of?')) {
      await eventRepository.deleteEventMakingOf(makingOfId)
      closePopup()
    }
  }

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <div className="w-2/5">
          <Input
            className="w-full"
            labelName="Valor"
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
        <Button onClick={() => handleSubmit(onSubmit)()}>Alterar</Button>
        <Button
          className="bg-red-800"
          onClick={() => deleteAlbumDatas(makingOfDatas.id)}
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}
