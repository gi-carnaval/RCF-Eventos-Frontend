import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import AppointmentTable from '../organism/AppointmentTable'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotograficRegisterTable } from '../organism/PhotograficRegisterTable'

type ParamsProps = {
  id: string
}

export default function SingleEvent() {
  const { id } = useParams<ParamsProps>()
  const [event, setEvent] = useState<IEvent>()

  const { isPopupOpen } = usePopup()
  const navigate = useNavigate()

  async function fetchEventData(eventId: string) {
    const res = await eventRepository.getEventById(eventId)
    if (res.data) {
      setEvent(res.data)
    }
  }
  console.log('Entrou na Página Single Event com os Compromissos: ', event)
  useEffect(() => {
    !isPopupOpen && id && fetchEventData(id)
  }, [id, isPopupOpen])

  return (
    <>
      <div className="flex justify-start pb-24">
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
        <AppointmentTable id={id} appointments={event?.appointment} />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 pb-24">
        <div className="w-4/5 flex flex-col px-40 py-12 items-center">
          <PhotograficRegisterTable
            photograficRegister={event?.photograficRegister}
          />
        </div>
      </div>
    </>
  )
}
