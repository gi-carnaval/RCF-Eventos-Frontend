import { FaCheck, FaPlus } from 'react-icons/fa'
import { TableCaption } from '../atoms/TableCaption'
import { TableTdContent } from '../atoms/TableTdContent'
import { TableTh } from '../atoms/TableTh'
import { TableThead } from '../atoms/TableThead'
import { TableTr } from '../atoms/TableTr'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { LuPencil } from 'react-icons/lu'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotograficRegisterForm } from '../molecules/PhotograficRegisterForm'

interface PhotograficRegisterTableProps {
  photograficRegister?: {
    id: string
    professionalQuantity: string
    photoAverage: string
    value: number
  }
}

export function PhotograficRegisterTable({
  photograficRegister,
}: PhotograficRegisterTableProps) {
  const { openPopup, applyContent } = usePopup()

  console.log('Dentro do Registro: ', photograficRegister)

  const editPhotograficRegisterPopupContent = {
    title: 'Adicionar Dados',
    content: <PhotograficRegisterForm />,
  }

  // function editAppointment(appointmentId: string) {
  //   const editAppointmentPopupContent = {
  //     title: 'Editar Compromisso',
  //     content: <EditAppointmentForm appointmentId={appointmentId} />,
  //   }
  //   openPopup()
  //   applyContent(editAppointmentPopupContent)
  // }

  return (
    <div className="w-full flex flex-row justify-center items-end gap-6">
      <table className="w-full border border-navy-40">
        <TableCaption>Registro Fotográfico</TableCaption>
        <TableThead>
          <TableTh>Ativo</TableTh>
          <TableTh>Quantidade de Profissionais</TableTh>
          <TableTh>Média de Fotos</TableTh>
          <TableTh>Valor</TableTh>
        </TableThead>
        <tbody>
          <TableTr>
            <TableTdContent>
              <div className="w-8 h-8 bg-navy-20 flex justify-center items-center rounded-sm">
                <FaCheck className="h-5 w-5" />
              </div>
            </TableTdContent>
            <TableTdContent>3</TableTdContent>
            <TableTdContent>1200</TableTdContent>
            <TableTdContent>1700</TableTdContent>
          </TableTr>
        </tbody>
      </table>
      {photograficRegister === undefined ? (
        <ButtonHoverIcon
          icon={<FaPlus />}
          onClick={() => {
            openPopup()
            applyContent(editPhotograficRegisterPopupContent)
          }}
        >
          Adicionar
        </ButtonHoverIcon>
      ) : (
        <ButtonHoverIcon
          icon={<LuPencil />}
          onClick={() => {
            // openPopup()
            // applyContent(addAppointmentPopupContent)
          }}
        >
          Editar
        </ButtonHoverIcon>
      )}
    </div>
  )
}
