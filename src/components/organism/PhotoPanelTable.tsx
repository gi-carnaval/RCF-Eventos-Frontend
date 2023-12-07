import { LuPencil } from 'react-icons/lu'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { TableTitle } from '../atoms/TableTitle'
import { TableTdContent } from '../atoms/TableTdContent'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotoPanelProps } from '@/src/types/photoPanel'
import { PhotoPanelCreateForm } from '../molecules/PhotoPanelCreateForm'
import { PhotoPanelEditForm } from '../molecules/PhotoPanelEditForm'

interface PhotoPanelTableProps {
  eventId?: string
  photoPanelDatas?: PhotoPanelProps
}

export function PhotoPanelTable({
  photoPanelDatas,
  eventId,
}: PhotoPanelTableProps) {
  const { openPopup, applyContent } = usePopup()

  function createPhotoPanel(eventId: string | undefined) {
    const createPhotoPanelPopupContent = {
      title: 'Adicionar Painel Fotográfico',
      content: <PhotoPanelCreateForm eventId={eventId} />,
    }
    openPopup()
    applyContent(createPhotoPanelPopupContent)
  }

  function editPhotoPanel(PhotoPanel: PhotoPanelProps) {
    const editPhotoPanelPopupContent = {
      title: 'Editar Painel Fotográfico',
      content: <PhotoPanelEditForm photoPanelDatas={PhotoPanel} />,
    }
    openPopup()
    applyContent(editPhotoPanelPopupContent)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <TableTitle>Painel Fotográfico</TableTitle>
      <div className="w-full flex flex-row gap-6">
        <table className="w-full border border-navy-40">
          <TableThead>
            <TableTh>Ativo</TableTh>
            <TableTh>Tamanho</TableTh>
            <TableTh>Valor</TableTh>
          </TableThead>
          {photoPanelDatas ? (
            <tbody>
              <TableTr>
                <TableTdContent>
                  <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                    <FaCheck className="h-5 w-5" />
                  </div>
                </TableTdContent>
                <TableTdContent>{photoPanelDatas.size}</TableTdContent>
                <TableTdContent>
                  {photoPanelDatas.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            </tbody>
          ) : null}
        </table>
        {photoPanelDatas ? (
          <ButtonHoverIcon
            icon={<LuPencil />}
            onClick={() => {
              editPhotoPanel(photoPanelDatas)
            }}
          >
            Editar
          </ButtonHoverIcon>
        ) : (
          <ButtonHoverIcon
            icon={<FaPlus />}
            onClick={() => {
              createPhotoPanel(eventId)
            }}
          >
            Adicionar
          </ButtonHoverIcon>
        )}
      </div>
    </div>
  )
}
