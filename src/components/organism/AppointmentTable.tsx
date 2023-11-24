import { MdModeEditOutline } from 'react-icons/md'
import TableTh from '../atoms/TableTh'
import ButtonAdd from '../atoms/ButtonAdd'
import CreateAppointmentForm from '../molecules/CreateAppointment'
import { usePopup } from '@/src/Hooks/usePopup'
import { AppointmentProps } from '@/src/types/event'

interface AppointmentTableProps {
  id?: string
  appointments?: AppointmentProps[]
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
  const editAppointmentPopupContent = {
    title: 'Editar Compromisso',
    content: <CreateAppointmentForm eventId={id} />,
  }

  function editAppointment(id: string | undefined) {
    alert(id)
  }

  return (
    <div className="w-full flex flex-col px-40 py-12 items-center">
      <table className="w-full ">
        <caption className="text-lg font-bold text-gray-70">
          Compromissos
        </caption>
        <thead>
          <tr>
            <TableTh>Título</TableTh>
            <TableTh>Data</TableTh>
            <TableTh className="w-2/5">Local</TableTh>
            <TableTh>Dia da Semana</TableTh>
            <TableTh>Horário</TableTh>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment) => {
            return (
              <tr
                key={appointment.id}
                className="h-16 border-b-2 border-b-navy-60 px-6 hover:bg-navy-60 cursor-pointer"
                onClick={() => {
                  openPopup()
                  applyContent(editAppointmentPopupContent)
                }}
              >
                <td className="w-1/5 text-base text-white-5 px-6">
                  {appointment.appointmentTitle}
                </td>
                <td className="w-1/5  text-base text-white-5 px-6">
                  {appointment.date}
                </td>
                <td className="w-1/5  text-base text-white-5 px-6">
                  {appointment.locale}
                </td>
                <td className="w-1/5  text-base text-white-5 px-6 capitalize">
                  {appointment.dayOfWeek}
                </td>
                <td className="w-1/5  text-base text-white-5 px-6">
                  {appointment.time}
                </td>
                <td
                  onClick={() => {
                    editAppointment(appointment.id)
                  }}
                  className="group/td fixed justify-center items-center hidden w-8 h-8 rounded-full -ml-2 cursor-pointer bg-navy-20 group-hover/tr:flex hover:w-20 hover:rounded-xl transition-all active:brightness-75 "
                >
                  <MdModeEditOutline />
                  <span className="hidden group-hover/td:flex">Editar</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <ButtonAdd
        onClick={() => {
          openPopup()
          applyContent(addAppointmentPopupContent)
        }}
      />
    </div>
  )
}
