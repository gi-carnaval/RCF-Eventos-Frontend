import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import ButtonAdd from '../atoms/ButtonAdd'
import { usePopup } from '../../Hooks/usePopup'
import ThTable from '../atoms/ThTable'
import CreateAppointmentForm from '../molecules/CreateAppointment'
import { MdModeEditOutline } from 'react-icons/md'

type ParamsProps = {
  id: string
}

export default function SingleEvent() {
  const { id } = useParams<ParamsProps>()
  const [event, setEvent] = useState<IEvent>()

  const navigate = useNavigate()

  async function fetchEventData(eventId: string) {
    const res = await eventRepository.getEventById(eventId)
    if (res.data) {
      setEvent(res.data)
    }
  }

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

  useEffect(() => {
    if (id) {
      fetchEventData(id)
    }
  }, [id])
  return (
    <>
      <div className="flex justify-start">
        <span
          className="cursor-pointer hover:opacity-25"
          onClick={() => {
            navigate('..', { relative: 'route' })
          }}
        >
          Voltar
        </span>
      </div>
      <h1 className="text-2xl font-bold text-center">{event?.hirer}</h1>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full flex flex-col px-40 py-12 items-center">
          <table className="w-full ">
            <caption className="text-lg font-bold text-gray-70">
              Compromissos
            </caption>
            <thead>
              <tr>
                <ThTable>Título</ThTable>
                <ThTable>Data</ThTable>
                <ThTable size="double">Local</ThTable>
                <ThTable>Dia da Semana</ThTable>
                <ThTable>Horário</ThTable>
              </tr>
            </thead>
            <tbody>
              {event?.Appointment?.map((appointment) => {
                return (
                  <>
                    <tr
                      key={appointment.id}
                      className="h-16 border-b-2 border-b-navy-60 px-6 hover:bg-navy-60 cursor-pointer"
                      onClick={() => {
                        openPopup()
                        applyContent(editAppointmentPopupContent)
                      }}
                    >
                      <td className="w-1/5  text-base text-white-5 px-6">
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
                        <span className="hidden group-hover/td:flex">
                          Editar
                        </span>
                      </td>
                    </tr>
                  </>
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
      </div>
    </>
  )
}
