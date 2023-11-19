import { useEffect, useState } from 'react'
import eventTypesRepository from '../../repositories/EventTypesRepository'
import { IEventTypes } from '../../types/eventTypes'
import { usePopup } from '../../Hooks/usePopup'
import CreateEventTypeForm from './CreateEventTypeForm'
import eventRepository from '../../repositories/EventRepository'

export default function CreateEventForm() {
  const [contratante, setContratante] = useState('')
  const [eventTypesData, setEventTypesData] = useState<IEventTypes[]>([])
  const [selectedEventType, setSelectedEventType] = useState('')

  const { applyContent } = usePopup()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEventType(event.target.value)
  }

  async function fetchEventTypesData() {
    const res = await eventTypesRepository.getEventTypes()
    if (res.data) {
      setEventTypesData(res.data)
      console.log(eventTypesData)
    }
  }

  async function handleCreateEvent() {
    await eventRepository.createEvent({
      contratante,
      tipoDeEvento: selectedEventType,
    })
  }

  const CreateEventTypePopupContent = {
    title: 'Adicionar Tipo de Evento',
    content: <CreateEventTypeForm />,
  }

  useEffect(() => {
    fetchEventTypesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form action="" className="flex flex-col gap-6 py-6">
      <div className="flex flex-col">
        <label htmlFor="contratante">Contratante</label>
        <input
          className="text-grey-70 bg-navy-60 px-5 py-2 rounded-lg"
          onChange={(event) => setContratante(event.target.value)}
          value={contratante}
          id="contratante"
          type="text"
        />
      </div>
      <div className="flex flex-col font-grey-70">
        <label htmlFor="tipoEvento">Tipo de Evento</label>
        <select
          id="tipoEvento"
          value={selectedEventType}
          onChange={handleChange}
          className="text-grey-70 bg-navy-60 px-5 py-2 rounded-lg"
        >
          <option value="">Selecione</option>
          {eventTypesData.map((eventType) => {
            return (
              <option
                className="capitalize"
                key={eventType.id}
                value={eventType.id}
              >
                {eventType.tipo}
              </option>
            )
          })}
        </select>
        <span
          className="text-end m-3 text-sm text-gray-70 cursor-pointer hover:text-gray-50"
          onClick={() => {
            applyContent(CreateEventTypePopupContent)
          }}
        >
          Cadastrar novo tipo de evento
        </span>
      </div>
      <a
        href="#"
        onClick={handleCreateEvent}
        className="bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5"
      >
        Adicionar
      </a>
    </form>
  )
}
