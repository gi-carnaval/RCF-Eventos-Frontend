import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import EventRow from '../molecules/EventRow'
import EmptyRowEvent from '../molecules/EmptyRowEvent'
import { TableTh } from '../atoms/TableTh'
import { usePopup } from '@/src/Hooks/usePopup'
import { TableThead } from '../atoms/TableThead'

export interface EventsProps {
  id: string
  hirer: string
  eventType: {
    type: string
  }
}

export default function EventsTable() {
  const [events, setEvents] = useState<EventsProps[]>([])

  const { isPopupOpen } = usePopup()

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
  }, [isPopupOpen])

  useEffect(() => {
    fetchEvents()
  }, [])

  return events.length !== 0 ? (
    <table className="w-full">
      <TableThead>
        <TableTh>Contratante(s)</TableTh>
        <TableTh>Data Evento Principal</TableTh>
        <TableTh>Tipo de Evento</TableTh>
        <TableTh>Status</TableTh>
      </TableThead>
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
