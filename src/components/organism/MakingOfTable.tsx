import { LuPencil } from 'react-icons/lu'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { TableTitle } from '../atoms/TableTitle'
import { TableTdContent } from '../atoms/TableTdContent'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { usePopup } from '@/src/Hooks/usePopup'
import { MakingOfCreateForm } from '../molecules/MakingOfCreateForm'
import { MakingOfProps } from '@/src/types/makingOf'
import { MakingOfEditForm } from '../molecules/MakingOfEditForm'

interface MakingOfTableProps {
  eventId?: string
  makingOfDatas?: MakingOfProps
}

export function MakingOfTable({ makingOfDatas, eventId }: MakingOfTableProps) {
  const { openPopup, applyContent } = usePopup()

  function createMakingOf(eventId: string | undefined) {
    const createMakingOfPopupContent = {
      title: 'Adicionar Making Of',
      content: <MakingOfCreateForm eventId={eventId} />,
    }
    openPopup()
    applyContent(createMakingOfPopupContent)
  }

  function editMakingOf(makingOf: MakingOfProps) {
    const editMakingOfPopupContent = {
      title: 'Editar Making Of',
      content: <MakingOfEditForm makingOfDatas={makingOf} />,
    }
    openPopup()
    applyContent(editMakingOfPopupContent)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <TableTitle>Making Of</TableTitle>
      <div className="w-full flex flex-row gap-6">
        <table className="w-full border border-navy-40">
          <TableThead>
            <TableTh>Ativo</TableTh>
            <TableTh>Valor</TableTh>
          </TableThead>
          {makingOfDatas ? (
            <tbody>
              <TableTr>
                <TableTdContent>
                  <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                    <FaCheck className="h-5 w-5" />
                  </div>
                </TableTdContent>
                <TableTdContent>
                  {makingOfDatas.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            </tbody>
          ) : null}
        </table>
        {makingOfDatas ? (
          <ButtonHoverIcon
            icon={<LuPencil />}
            onClick={() => {
              editMakingOf(makingOfDatas)
            }}
          >
            Editar
          </ButtonHoverIcon>
        ) : (
          <ButtonHoverIcon
            icon={<FaPlus />}
            onClick={() => {
              createMakingOf(eventId)
            }}
          >
            Adicionar
          </ButtonHoverIcon>
        )}
      </div>
    </div>
  )
}
