import { usePopup } from '@/src/Hooks/usePopup'
import { EditAppointmentForm } from '../molecules/AppointmentEditForm'
import dayjs from 'dayjs'
import { TableTr } from '../atoms/TableTr'
import { TableThead } from '../atoms/TableThead'
import { TableTdContent } from '../atoms/TableTdContent'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { CreateAppointmentForm } from '../molecules/AppointmentCreateForm'
import { TableTh } from '../atoms/TableTh'
import { FaPlus } from 'react-icons/fa'
import { TableTitle } from '../atoms/TableTitle'
import { InstallmentsProps } from '@/src/types/installments'

interface PaymentTableProps {
  eventId?: string
  installments?: InstallmentsProps[]
}

export default function PaymentTable({
  eventId,
  installments,
}: PaymentTableProps) {
  const { openPopup, applyContent } = usePopup()

  const addAppointmentPopupContent = {
    title: 'Adicionar Pagamento',
    content: <CreateAppointmentForm eventId={eventId} />,
  }

  function editAppointment(appointmentId: string) {
    const editAppointmentPopupContent = {
      title: 'Editar Pagamento',
      content: <EditAppointmentForm appointmentId={appointmentId} />,
    }
    openPopup()
    applyContent(editAppointmentPopupContent)
  }

  return (
    <div className="w-full flex flex-col px-40 pt-12 items-center">
      <TableTitle>Compromissos</TableTitle>

      <table className="w-full border border-navy-40">
        <TableThead>
          <TableTh>Pagamentos</TableTh>
          <TableTh>Data</TableTh>
          <TableTh className="w-2/5">Valor</TableTh>
        </TableThead>

        <tbody>
          {installments?.map((installment) => {
            return (
              <TableTr
                key={installment.id}
                onClick={() => {
                  editAppointment(installment.id)
                }}
              >
                <TableTdContent className="w-1/5">
                  {installment.installmentNumber}
                </TableTdContent>
                <TableTdContent className="w-1/5">
                  {dayjs(installment.date).format('DD/MM/YYYY')}
                </TableTdContent>
                <TableTdContent className="w-1/5">
                  {installment.installmentValue.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableTdContent>
              </TableTr>
            )
          })}
        </tbody>
      </table>
      <ButtonHoverIcon
        icon={<FaPlus />}
        onClick={() => {
          openPopup()
          applyContent(addAppointmentPopupContent)
        }}
      >
        Adicionar Compromisso
      </ButtonHoverIcon>
    </div>
  )
}
