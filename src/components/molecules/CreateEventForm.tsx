import { useEffect, useState } from 'react'
import eventTypesRepository from '../../repositories/EventTypesRepository'
import { IEventTypes } from '../../types/eventTypes'
import { usePopup } from '../../Hooks/usePopup'
import CreateEventTypeForm from './CreateEventTypeForm'
import eventRepository from '../../repositories/EventRepository'
import Input from '../atoms/Input'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../atoms/InputErrorMessage'

interface FormData {
  hirer: string
  eventType: string
}

export default function CreateEventForm() {
  const [eventTypesData, setEventTypesData] = useState<IEventTypes[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const { applyContent } = usePopup()

  async function fetchEventTypesData() {
    const res = await eventTypesRepository.getEventTypes()
    if (res.data) {
      setEventTypesData(res.data)
      console.log(eventTypesData)
    }
  }

  async function onSubmit(data: FormData) {
    await eventRepository.createEvent(data)
    // alert('Enviou: ')
    // console.log('Data: ', data)
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
      <div>
        <Input
          id="hirer"
          type="text"
          labelName="Contratante(s)"
          register={register('hirer', {
            required: true,
          })}
        />
        {errors.hirer?.type === 'required' && (
          <InputErrorMessage>Este campo é obrigatório *</InputErrorMessage>
        )}
      </div>
      <div className="flex flex-col font-grey-70">
        <div className="flex flex-col">
          <label htmlFor="tipoEvento">Tipo de Evento</label>
          <select
            className="text-grey-70 bg-navy-60 px-5 py-2 rounded-lg"
            {...register('eventType', {
              required: true,
              validate: (value) => {
                return value !== '0'
              },
            })}
          >
            <option value="0">Selecione</option>
            {eventTypesData.map((eventType) => {
              return (
                <option
                  className="capitalize"
                  key={eventType.id}
                  value={eventType.id}
                >
                  {eventType.type}
                </option>
              )
            })}
          </select>
          {errors.hirer?.type === 'required' && (
            <InputErrorMessage>Selecione uma opção válida *</InputErrorMessage>
          )}
        </div>
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
        onClick={() => handleSubmit(onSubmit)()}
        className="bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5"
      >
        Adicionar
      </a>
    </form>
  )
}
