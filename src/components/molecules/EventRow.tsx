import { useNavigate } from 'react-router-dom'
import { EventsProps } from '../template/EventsTable'
import TableRow from '../atoms/TableTr'
import TableTdContent from '../atoms/TableTdContent'

interface EventRowProps {
  event: EventsProps
}

export default function EventRow({ event }: EventRowProps) {
  const navigate = useNavigate()

  function handleClickNavigate() {
    navigate(`/events/${event.id}`)
  }

  return (
    <TableRow onClick={handleClickNavigate}>
      <TableTdContent>{event.hirer}</TableTdContent>
      <TableTdContent>
        <span>26/08/2025</span>
      </TableTdContent>
      <TableTdContent>
        <span className="capitalize">{event.eventType.type}</span>
      </TableTdContent>
      <TableTdContent>
        <span>70/100</span>
      </TableTdContent>
    </TableRow>
  )
}
