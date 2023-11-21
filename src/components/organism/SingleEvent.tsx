import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import ButtonAdd from '../atoms/ButtonAdd'

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
        <div className="w-full flex flex-col px-40 items-center">
          <table className="w-full ">
            <caption className="text-lg font-bold text-gray-70 border-gray-70 border-x-2 border-t-2">
              Compromissos
            </caption>
            <thead>
              <tr>
                <th className="border-2 border-gray-70 w-1/5">Data</th>
                <th className="border-2 border-gray-70 w-2/5">Local</th>
                <th className="border-2 border-gray-70 w-1/5">Dia da Semana</th>
                <th className="border-2 border-gray-70 w-1/5">Horário</th>
              </tr>
            </thead>
          </table>
          <ButtonAdd />
        </div>
      </div>
    </>
  )
}
