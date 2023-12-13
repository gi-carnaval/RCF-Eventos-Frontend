import { useParams, useNavigate } from 'react-router-dom'
import eventRepository from '../../repositories/EventRepository'
import { useEffect, useState } from 'react'
import { IEvent } from '../../types/event'
import AppointmentTable from '../organism/AppointmentTable'
import { usePopup } from '@/src/Hooks/usePopup'
import { PhotographicRegisterTable } from '../organism/PhotograficRegisterTable'
import { SingleEventFooter } from '../organism/SingleEventFooter'
import { AlbumTable } from '../organism/AlbumTable'
import { MakingOfTable } from '../organism/MakingOfTable'
import { PhotoShootTable } from '../organism/PhotoShootTable'
import { PhotoPanelTable } from '../organism/PhotoPanelTable'
import PaymentTable from '../organism/PaymentTable'

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

  console.log(event)

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
      <div className="flex flex-col justify-center items-center gap-16">
        <AppointmentTable id={id} appointments={event?.appointment} />
        <div className="w-full flex flex-col px-10 items-center gap-16 mb-24">
          <PhotographicRegisterTable
            photographicRegister={event?.photographicRegister}
            eventId={event?.id}
          />
          <div className="w-full flex flex-row gap-12">
            <AlbumTable albumDatas={event?.album} eventId={event?.id} />
            <MakingOfTable
              makingOfDatas={event?.makingOf}
              eventId={event?.id}
            />
          </div>
          <div className="w-full flex flex-row gap-12">
            <PhotoShootTable
              photoShootDatas={event?.photoShoot}
              eventId={event?.id}
            />
            <PhotoPanelTable
              photoPanelDatas={event?.photoPanel}
              eventId={event?.id}
            />
          </div>
          <PaymentTable
            installments={event?.installments}
            eventId={event?.id}
          />
        </div>
      </div>
      <SingleEventFooter totalValue={event?.totalValue} eventId={id} />
    </>
  )
}
