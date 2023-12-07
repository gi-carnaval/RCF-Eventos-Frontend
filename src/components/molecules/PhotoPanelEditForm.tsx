import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'
import { PhotoPanelProps } from '@/src/types/photoPanel'
import { PhotoPanelRepository } from '@/src/repositories/PhotoPanelRepository'

interface FormProps {
  size: string
  value: number
}

interface PhotoPanelEditFormProps {
  photoPanelDatas: PhotoPanelProps
}

export function PhotoPanelEditForm({
  photoPanelDatas,
}: PhotoPanelEditFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      size: photoPanelDatas.size,
      value: photoPanelDatas.value,
    },
  })

  async function onSubmit(data: FormProps) {
    const photoPanelData = {
      id: photoPanelDatas.id,
      size: data.size,
      value: data.value,
    }
    await PhotoPanelRepository.updatePhotoPanel(photoPanelData)
    closePopup()
  }

  async function deletePhotoPanelDatas(photoPanelId: string) {
    if (confirm('Confirmar exclusão do Painel Fotográfico?')) {
      await eventRepository.deleteEventPhotoPanel(photoPanelId)
      closePopup()
    }
  }

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <div className="w-2/5">
          <Input
            className="w-full"
            labelName="Tamanho do Painel"
            type="string"
            register={register('size', {
              required: true,
            })}
          />
          {errors.value?.type === 'required' && (
            <InputErrorMessage>
              Tamanho do Painel é obrigatório *
            </InputErrorMessage>
          )}
        </div>
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
          onClick={() => deletePhotoPanelDatas(photoPanelDatas.id)}
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}
