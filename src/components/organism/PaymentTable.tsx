import { usePopup } from '@/src/Hooks/usePopup'
import dayjs from 'dayjs'
import { TableTr } from '../atoms/TableTr'
import { TableThead } from '../atoms/TableThead'
import { TableTdContent } from '../atoms/TableTdContent'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { TableTh } from '../atoms/TableTh'
import { FaPlus, FaTrash } from 'react-icons/fa'
import { TableTitle } from '../atoms/TableTitle'
import { InstallmentsProps } from '@/src/types/installments'
import { InstallmentCreateForm } from '../molecules/InstallmentCreateForm'
import { InstallmentDeleteForm } from '../molecules/InstallmentDeleteForm'

interface PaymentTableProps {
  eventId?: string
  installments?: InstallmentsProps[]
  totalValue?: number
}

export default function PaymentTable({
  eventId,
  installments,
  totalValue,
}: PaymentTableProps) {
  const { openPopup, applyContent } = usePopup()

  const addAppointmentPopupContent = {
    title: 'Adicionar Pagamento',
    content: (
      <InstallmentCreateForm eventId={eventId} totalValue={totalValue} />
    ),
  }

  const deleteAppointmentPopupContent = {
    title: 'Excluir Todos os Pagamentos',
    content: <InstallmentDeleteForm eventId={eventId} />,
  }

  return (
    <div className="w-full flex flex-col px-40 pt-12 items-center">
      <TableTitle>Pagamentos</TableTitle>

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
                className="cursor-default hover:bg-transparent"
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
      {installments?.length === 0 ? (
        <ButtonHoverIcon
          icon={<FaPlus />}
          onClick={() => {
            openPopup()
            applyContent(addAppointmentPopupContent)
          }}
        >
          Adicionar Pagamento
        </ButtonHoverIcon>
      ) : (
        <ButtonHoverIcon
          icon={<FaTrash />}
          onClick={() => {
            openPopup()
            applyContent(deleteAppointmentPopupContent)
          }}
        >
          Excluir Todos Pagamentos
        </ButtonHoverIcon>
      )}
    </div>
  )
}
