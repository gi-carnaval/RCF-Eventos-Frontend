import { useState, useEffect } from 'react'
import { IEventTypes } from '../../types/eventTypes'
import eventTypesRepository from '../../repositories/EventTypesRepository'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../atoms/InputErrorMessage'
import Input from '../atoms/Input'

export interface FormData {
  type: string
}

export default function CreateEventTypeForm() {
  const [eventTypeDataExists, setEventTypeDataExists] = useState<IEventTypes[]>(
    [],
  )

  function eventTypeValidation(value: string) {
    const valueTransformed = value.toLowerCase()
    return !eventTypesNames.includes(valueTransformed)
  }

  const eventTypesNames = eventTypeDataExists.map((eventType) => {
    return eventType.type
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    alert(JSON.stringify(data))
    await eventTypesRepository.createEventTypes(data)
  }
  async function fetchEventTypesData() {
    const res = await eventTypesRepository.getEventTypes()
    if (res.data) {
      setEventTypeDataExists(res.data)
    }
  }

  // const handleSubmit = async (values: IEventTypes) => {
  //   await eventTypesRepository.createEventTypes(values)
  // }
  useEffect(() => {
    fetchEventTypesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="flex flex-col gap-6 py-6">
      <div>
        <Input
          id="eventType"
          labelName="Tipo de Evento"
          placeholder="Digite aqui..."
          type="text"
          register={register('type', {
            required: true,
            validate: async (value) => await eventTypeValidation(value),
          })}
        />
        {errors.type?.type === 'required' && (
          <InputErrorMessage>Tipo de Evento é obrigatório *</InputErrorMessage>
        )}
        {errors.type?.type === 'validate' && (
          <InputErrorMessage>Tipo de Evento já cadastrado *</InputErrorMessage>
        )}
      </div>

      <button
        type="submit"
        onClick={() => handleSubmit(onSubmit)()}
        className="bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5"
      >
        Adicionar
      </button>
    </div>
  )
}
