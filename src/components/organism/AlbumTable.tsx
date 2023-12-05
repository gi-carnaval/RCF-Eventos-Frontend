import { LuPencil } from 'react-icons/lu'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { TableTitle } from '../atoms/TableTitle'
import { TableTdContent } from '../atoms/TableTdContent'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { AlbumCreateForm } from '../molecules/AlbumCreateForm'
import { usePopup } from '@/src/Hooks/usePopup'
import { FullAlbumProps } from '@/src/types/album'
import { AlbumEditForm } from '../molecules/AlbumEditForm'

interface AlbumTableProps {
  eventId?: string
  albumDatas?: FullAlbumProps
}

export function AlbumTable({ albumDatas, eventId }: AlbumTableProps) {
  const { openPopup, applyContent } = usePopup()

  function createAlbum(eventId: string | undefined) {
    const createAlbumPopupContent = {
      title: 'Adicionar Dados',
      content: <AlbumCreateForm eventId={eventId} />,
    }
    openPopup()
    applyContent(createAlbumPopupContent)
  }

  function editAlbum(album: FullAlbumProps) {
    const editPhotographicRegisterPopupContent = {
      title: 'Adicionar Dados',
      content: <AlbumEditForm albumDatas={album} />,
    }
    openPopup()
    applyContent(editPhotographicRegisterPopupContent)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <TableTitle>Album Encadernado</TableTitle>
      <div className="w-full flex flex-row gap-6">
        <table className="w-full border border-navy-40">
          <TableThead>
            <TableTh>Ativo</TableTh>
            <TableTh>Tamanho do Albúm</TableTh>
            <TableTh>Qtd de Páginas</TableTh>
            <TableTh>Capa</TableTh>
            <TableTh>Valor</TableTh>
          </TableThead>
          {albumDatas ? (
            <tbody>
              <TableTr>
                <TableTdContent>
                  <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                    <FaCheck className="h-5 w-5" />
                  </div>
                </TableTdContent>
                <TableTdContent>{albumDatas.size}</TableTdContent>
                <TableTdContent>{albumDatas.pages}</TableTdContent>
                <TableTdContent>{albumDatas?.albumCover}</TableTdContent>
                <TableTdContent>
                  {albumDatas.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            </tbody>
          ) : null}
        </table>
        {albumDatas ? (
          <ButtonHoverIcon
            icon={<LuPencil />}
            onClick={() => {
              editAlbum(albumDatas)
            }}
          >
            Editar
          </ButtonHoverIcon>
        ) : (
          <ButtonHoverIcon
            icon={<FaPlus />}
            onClick={() => {
              createAlbum(eventId)
            }}
          >
            Adicionar
          </ButtonHoverIcon>
        )}
      </div>
    </div>
  )
}
