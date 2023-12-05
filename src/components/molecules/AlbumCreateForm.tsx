import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'

interface FormProps {
  size: string
  pages: string
  albumCover?: string
  value: number
}

interface AlbumCreateFormProps {
  eventId?: string
}

export function AlbumCreateForm({ eventId }: AlbumCreateFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>()

  async function onSubmit({ albumCover = '', ...data }: FormProps) {
    const albumData = {
      size: data.size,
      pages: data.pages,
      albumCover,
      value: data.value,
      eventId,
    }
    console.log('Data dentro do Album Create: ', data)
    await eventRepository.createEventAlbum(albumData)
    closePopup()
  }

  return (
    <div className="flex flex-col gap-6 justify-center py-6">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <div className="w-2/4">
          <Input
            className="w-full"
            labelName="Tamanho do Album"
            placeholder="Ex. 30 x 30"
            type="text"
            register={register('size', { required: true })}
          />
          {errors.size?.type === 'required' && (
            <InputErrorMessage>
              Tamanho do Album é obrigatório *
            </InputErrorMessage>
          )}
        </div>
        <div className="w-2/4">
          <Input
            className="w-full"
            labelName="Quantidade de Páginas"
            type="text"
            register={register('pages', { required: true })}
          />
          {errors.pages?.type === 'required' && (
            <InputErrorMessage>
              Qtd de páginas é obrigatório *
            </InputErrorMessage>
          )}
        </div>
        <div className="w-2/4">
          <Input
            className="w-full"
            labelName="Capa do Album"
            type="text"
            register={register('albumCover')}
          />
        </div>
        <div className="w-2/4">
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
      <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
    </div>
  )
}
