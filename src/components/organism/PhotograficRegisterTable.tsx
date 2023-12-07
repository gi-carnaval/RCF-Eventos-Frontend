import { FaCheck, FaPlus } from 'react-icons/fa'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { LuPencil } from 'react-icons/lu'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotographicRegisterCreateForm } from '../molecules/PhotographicRegisterCreateForm'
import { PhotographicRegisterEditForm } from '../molecules/PhotographicRegisterEditForm'
import { PhotographicRegisterProps } from '@/src/types/event'
import { TableTitle } from '../atoms/TableTitle'
import { TableTdContent } from '../atoms/TableTdContent'

interface PhotographicRegisterTableProps {
  eventId?: string
  photographicRegister?: {
    id: string
    professionalQuantity: string
    photoAverage: string
    value: number
  }
}

export function PhotographicRegisterTable({
  photographicRegister,
  eventId,
}: PhotographicRegisterTableProps) {
  const { openPopup, applyContent } = usePopup()

  function createPhotographicRegister(eventId: string | undefined) {
    const createPhotographicRegisterPopupContent = {
      title: 'Adicionar Registro Fotográfico',
      content: <PhotographicRegisterCreateForm eventId={eventId} />,
    }
    openPopup()
    applyContent(createPhotographicRegisterPopupContent)
  }
  function editPhotographicRegister(
    photographicRegister: PhotographicRegisterProps,
  ) {
    const editPhotographicRegisterPopupContent = {
      title: 'Editar Registro Fotográfico',
      content: (
        <PhotographicRegisterEditForm
          photographicRegister={photographicRegister}
        />
      ),
    }
    openPopup()
    applyContent(editPhotographicRegisterPopupContent)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <TableTitle>Registro Fotográfico</TableTitle>
      <div className="w-full flex flex-row gap-6">
        <table className="w-full border border-navy-40">
          <TableThead>
            <TableTh>Ativo</TableTh>
            <TableTh>Quantidade de Profissionais</TableTh>
            <TableTh>Média de Fotos</TableTh>
            <TableTh>Valor</TableTh>
          </TableThead>
          {photographicRegister ? (
            <tbody>
              <TableTr>
                <TableTdContent>
                  <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                    <FaCheck className="h-5 w-5" />
                  </div>
                </TableTdContent>
                <TableTdContent>
                  {photographicRegister.professionalQuantity}
                </TableTdContent>
                <TableTdContent>
                  {photographicRegister.photoAverage}
                </TableTdContent>
                <TableTdContent>
                  {photographicRegister.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            </tbody>
          ) : null}
        </table>
        {photographicRegister ? (
          <ButtonHoverIcon
            icon={<LuPencil />}
            onClick={() => {
              editPhotographicRegister(photographicRegister)
            }}
          >
            Editar
          </ButtonHoverIcon>
        ) : (
          <ButtonHoverIcon
            icon={<FaPlus />}
            onClick={() => {
              createPhotographicRegister(eventId)
            }}
          >
            Adicionar
          </ButtonHoverIcon>
        )}
      </div>
    </div>
  )
}
