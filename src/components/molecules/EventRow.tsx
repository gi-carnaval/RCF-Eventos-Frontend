import { useNavigate } from 'react-router-dom'
import { EventsProps } from '../organism/EventsTable'

interface EventRowProps {
  event: EventsProps
}

export default function EventRow({ event }: EventRowProps) {
  const navigate = useNavigate()

  function handleClickNavigate() {
    navigate(`/events/${event.id}`)
  }

  return (
    <tr
      className="h-16 border-b-2 border-b-navy-60 px-6 hover:bg-navy-60 cursor-pointer"
      onClick={handleClickNavigate}
    >
      <td className="text-base text-white-5 px-6">{event.contratante}</td>
      <td className="text-base text-white-5 px-6">
        <span>26/08/2025</span>
      </td>
      <td className="text-base text-white-5 px-6">
        <span className="capitalize">{event.tipoEvento.tipo}</span>
      </td>
      <td className="text-base text-white-5 px-6">
        <span>70/100</span>
      </td>
      <td className="text-base text-white-5 px-6">
        <span>Editar</span>
      </td>
    </tr>
  )
}
