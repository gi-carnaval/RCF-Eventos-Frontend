import { usePopup } from '@/src/Hooks/usePopup'
import { EditAppointmentForm } from '../molecules/AppointmentEditForm'
import dayjs from 'dayjs'
import { FullAppointmentProps } from '@/src/types/appointment'
import { TableTr } from '../atoms/TableTr'
import { TableThead } from '../atoms/TableThead'
import { TableCaption } from '../atoms/TableCaption'
import { TableTdContent } from '../atoms/TableTdContent'
import { ButtonHoverIcon } from '../atoms/ButtonHoverIcon'
import { CreateAppointmentForm } from '../molecules/AppointmentCreateForm'
import { TableTh } from '../atoms/TableTh'
import { FaPlus } from 'react-icons/fa'

interface AppointmentTableProps {
  id?: string
  appointments?: FullAppointmentProps[]
}

export default function AppointmentTable({
  id,
  appointments,
}: AppointmentTableProps) {
  const { openPopup, applyContent } = usePopup()

  const addAppointmentPopupContent = {
    title: 'Adicionar Compromisso',
    content: <CreateAppointmentForm eventId={id} />,
  }

  function editAppointment(appointmentId: string) {
    const editAppointmentPopupContent = {
      title: 'Editar Compromisso',
      content: <EditAppointmentForm appointmentId={appointmentId} />,
    }
    openPopup()
    applyContent(editAppointmentPopupContent)
  }

  return (
    <div className="w-full flex flex-col px-40 py-12 items-center">
      <table className="w-full border border-navy-40">
        <TableCaption>Compromissos</TableCaption>
        <TableThead>
          <TableTh>Título</TableTh>
          <TableTh>Data</TableTh>
          <TableTh className="w-2/5">Local</TableTh>
          <TableTh>Dia da Semana</TableTh>
          <TableTh>Horário</TableTh>
        </TableThead>

        <tbody>
          {appointments?.map((appointment) => {
            return (
              <TableTr
                key={appointment.id}
                onClick={() => {
                  editAppointment(appointment.id)
                }}
              >
                <TableTdContent className="w-1/5">
                  {appointment.appointmentTitle}
                </TableTdContent>
                <TableTdContent className="w-1/5">
                  {dayjs(appointment.date).format('DD/MM/YYYY')}
                </TableTdContent>
                <TableTdContent className="w-1/5">
                  {appointment.locale}
                </TableTdContent>
                <TableTdContent className="w-1/5 capitalize">
                  {appointment.dayOfWeek}
                </TableTdContent>
                <TableTdContent className="w-1/5">
                  {appointment.time}
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
