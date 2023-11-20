import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import EventRow from '../molecules/EventRow'
import EmptyRowEvent from '../molecules/EmptyRowEvent'

export interface EventsProps {
  id: string
  hirer: string
  eventType: {
    type: string
  }
}

export default function EventsTable() {
  const [events, setEvents] = useState<EventsProps[]>([])

  async function fetchEvents() {
    try {
      const response = await api.get('/events')
      response && setEvents(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
      alert('Não foi possível carregar os eventos')
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <table className="w-full">
      <thead>
        <tr>
          <td className="text-grey-70">Contratante(s)</td>
          <td className="text-grey-70">Data Evento Principal</td>
          <td className="text-grey-70">Tipo de Evento</td>
          <td className="text-grey-70">Status</td>
          <td className="text-grey-70">Ações</td>
        </tr>
      </thead>
      <tbody>
        {events.length > 0 ? (
          events.map((event) => {
            return <EventRow key={event.id} event={event} />
          })
        ) : (
          <EmptyRowEvent />
        )}
      </tbody>
    </table>
  )
}