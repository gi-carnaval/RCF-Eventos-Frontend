import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'
// import { photoShootRepository } from '@/src/repositories/photoShootRepository'
import { PhotoShootProps } from '@/src/types/photoShoot'
import { PhotoShootRepository } from '@/src/repositories/PhotoShootRepository'

interface FormProps {
  value: number
}

interface PhotoShootEditFormProps {
  photoShootDatas: PhotoShootProps
}

export function PhotoShootEditForm({
  photoShootDatas,
}: PhotoShootEditFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      value: photoShootDatas.value,
    },
  })

  async function onSubmit(data: FormProps) {
    const photoShootData = {
      id: photoShootDatas.id,
      value: data.value,
    }
    await PhotoShootRepository.updatePhotoShoot(photoShootData)
    closePopup()
  }

  async function deleteAlbumDatas(photoShootId: string) {
    if (confirm('Confirmar exclusão da Sessão de Fotos?')) {
      await eventRepository.deleteEventPhotoShoot(photoShootId)
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
          onClick={() => deleteAlbumDatas(photoShootDatas.id)}
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}
