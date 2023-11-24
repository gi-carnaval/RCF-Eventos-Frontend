import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import EventRow from '../molecules/EventRow'
import EmptyRowEvent from '../molecules/EmptyRowEvent'
import TableTh from '../atoms/TableTh'

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
    } catch (error) {
      alert('Não foi possível carregar os eventos')
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return events.length > 0 ? (
    <table className="w-full">
      <thead>
        <tr>
          <TableTh>Contratante(s)</TableTh>
          <TableTh>Data Evento Principal</TableTh>
          <TableTh>Tipo de Evento</TableTh>
          <TableTh>Status</TableTh>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          return <EventRow key={event.id} event={event} />
        })}
      </tbody>
    </table>
  ) : (
    <EmptyRowEvent />
  )
}
