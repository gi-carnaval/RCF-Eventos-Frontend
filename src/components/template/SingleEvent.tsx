import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import AppointmentTable from '../organism/AppointmentTable'

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
        <AppointmentTable id={id} appointments={event?.Appointment} />
      </div>
    </>
  )
}
