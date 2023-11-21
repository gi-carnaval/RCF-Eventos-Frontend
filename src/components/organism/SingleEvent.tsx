import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import ButtonAdd from '../atoms/ButtonAdd'
import { usePopup } from '../../Hooks/usePopup'
import ThTable from '../atoms/ThTable'
import CreateAppointmentForm from '../molecules/CreateAppointment'

type ParamsProps = {
  id: string
}

export default function SingleEvent() {
  const { id } = useParams<ParamsProps>()
  const [event, setEvent] = useState<IEvent>()

  const navigate = useNavigate()

  async function fetchEventData(eventId: string) {
    if (!eventId) return
    const res = await eventRepository.getEventById(eventId)
    if (res.data) {
      setEvent(res.data)
    }
  }

  const { openPopup, applyContent } = usePopup()

  const popupContent = {
    title: 'Adicionar Compromisso',
    content: <CreateAppointmentForm />,
  }

  useEffect(() => {
    if (id) {
      fetchEventData(id)
    }
  }, [id])
  console.log('EVENTO: ', event)
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
        <div className="w-full flex flex-col px-40 items-center">
          <table className="w-full ">
            <caption className="text-lg font-bold text-gray-70 border-gray-70 border-x-2 border-t-2">
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
                  <tr key={appointment.id}>
                    <td className="border-2 border-gray-70 w-1/5 text-center">
                      {appointment.appointmentTitle}
                    </td>
                    <td className="border-2 border-gray-70 w-1/5 text-center">
                      {appointment.date}
                    </td>
                    <td className="border-2 border-gray-70 w-1/5 text-center">
                      {appointment.locale}
                    </td>
                    <td className="border-2 border-gray-70 w-1/5 text-center">
                      {appointment.dayOfWeek}
                    </td>
                    <td className="border-2 border-gray-70 w-1/5 text-center">
                      {appointment.time}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <ButtonAdd
            onClick={() => {
              openPopup()
              applyContent(popupContent)
            }}
          />
        </div>
      </div>
    </>
  )
}
