import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'
import InputErrorMessage from '../atoms/InputErrorMessage'
import eventRepository from '@/src/repositories/EventRepository'
import { FullAlbumProps } from '@/src/types/album'
import { albumRepository } from '@/src/repositories/AlbumRepository'

interface FormProps {
  size: string
  pages: string
  albumCover: string
  value: number
}

interface AlbumEditFormProps {
  albumDatas: FullAlbumProps
}

export function AlbumEditForm({ albumDatas }: AlbumEditFormProps) {
  const { closePopup } = usePopup()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      size: albumDatas.size,
      pages: albumDatas.pages,
      albumCover: albumDatas.albumCover,
      value: albumDatas.value,
    },
  })

  async function onSubmit(data: FormProps) {
    const albumDatasData = {
      id: albumDatas.id,
      size: data.size,
      pages: data.pages,
      albumCover: data.albumCover,
      value: data.value,
    }
    await albumRepository.updateAlbum(albumDatasData)
    closePopup()
  }

  async function deleteAlbumDatas(albumDatasId: string) {
    if (confirm('Confirmar exclusão do Album?')) {
      await eventRepository.deleteEventAlbum(albumDatasId)
      closePopup()
    }
  }

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <div className="w-2/5">
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
        <div className="w-2/5">
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
        <div className="w-2/5">
          <Input
            className="w-full"
            labelName="Capa do Album"
            type="text"
            register={register('albumCover')}
          />
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
          onClick={() => deleteAlbumDatas(albumDatas.id)}
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}
