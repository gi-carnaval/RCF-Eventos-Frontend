import { LuPencil } from 'react-icons/lu'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { TableTitle } from '../atoms/TableTitle'
import { TableTdContent } from '../atoms/TableTdContent'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotoShootCreateForm } from '../molecules/PhotoShootCreateForm'
import { PhotoShootProps } from '@/src/types/photoShoot'
import { PhotoShootEditForm } from '../molecules/PhotoShootEditForm'

interface PhotoShootTableProps {
  eventId?: string
  photoShootDatas?: PhotoShootProps
}

export function PhotoShootTable({
  photoShootDatas,
  eventId,
}: PhotoShootTableProps) {
  const { openPopup, applyContent } = usePopup()

  function createPhotoShoot(eventId: string | undefined) {
    const createPhotoShootPopupContent = {
      title: 'Adicionar Sessão Fotográfica',
      content: <PhotoShootCreateForm eventId={eventId} />,
    }
    openPopup()
    applyContent(createPhotoShootPopupContent)
  }

  function editPhotoShoot(PhotoShoot: PhotoShootProps) {
    const editPhotoShootPopupContent = {
      title: 'Editar Sessão Fotográfica',
      content: <PhotoShootEditForm photoShootDatas={PhotoShoot} />,
    }
    openPopup()
    applyContent(editPhotoShootPopupContent)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <TableTitle>Sessão Fotográfica</TableTitle>
      <div className="w-full flex flex-row gap-6">
        <table className="w-full border border-navy-40">
          <TableThead>
            <TableTh>Ativo</TableTh>
            <TableTh>Valor</TableTh>
          </TableThead>
          {photoShootDatas ? (
            <tbody>
              <TableTr>
                <TableTdContent>
                  <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                    <FaCheck className="h-5 w-5" />
                  </div>
                </TableTdContent>
                <TableTdContent>
                  {photoShootDatas.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            </tbody>
          ) : null}
        </table>
        {photoShootDatas ? (
          <ButtonHoverIcon
            icon={<LuPencil />}
            onClick={() => {
              editPhotoShoot(photoShootDatas)
            }}
          >
            Editar
          </ButtonHoverIcon>
        ) : (
          <ButtonHoverIcon
            icon={<FaPlus />}
            onClick={() => {
              createPhotoShoot(eventId)
            }}
          >
            Adicionar
          </ButtonHoverIcon>
        )}
      </div>
    </div>
  )
}
