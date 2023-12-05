import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import AppointmentTable from '../organism/AppointmentTable'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotographicRegisterTable } from '../organism/PhotograficRegisterTable'
import { SingleEventFooter } from '../organism/SingleEventFooter'
import { AlbumTable } from '../organism/AlbumTable'
import { getEventTotalValue } from '@/src/lib/functions'
import { Button } from '../atoms/Button'

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
  useEffect(() => {
    !isPopupOpen && id && fetchEventData(id)
  }, [id, isPopupOpen])

  const eventTotalValue = getEventTotalValue({
    photographicRegisterValue: event?.photographicRegister?.value,
    albumValue: event?.album?.value,
  })

  async function generateReport() {
    try {
      const response = await eventRepository.getEventReport(id)
      const blob = new Blob([response.data], { type: 'application/pdf' })

      const url = window.URL.createObjectURL(blob)
      window.open(url, '_blank')
      window.URL.revokeObjectURL(url)
    } catch (error) {
      alert('Error downloading PDF')
    }
  }

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
      <div className="flex flex-col justify-center items-center gap-6 mb-12">
        <div className="w-4/5 flex flex-col px-40 items-center">
          <PhotographicRegisterTable
            photographicRegister={event?.photographicRegister}
            eventId={event?.id}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 mb-12">
        <div className="w-4/5 flex flex-col px-40 items-center">
          <AlbumTable albumDatas={event?.album} eventId={event?.id} />
        </div>
      </div>
      <Button onClick={generateReport}>Gerar Contrato</Button>
      <SingleEventFooter totalValue={eventTotalValue} />
    </>
  )
}
