import { FaCheck, FaPencilAlt } from 'react-icons/fa'
import Input from '../atoms/Input'
import { useEffect, useState } from 'react'
import InputErrorMessage from '../atoms/InputErrorMessage'
import { useForm } from 'react-hook-form'
import eventRepository from '@/src/repositories/EventRepository'
import { useForceRerender } from '@/src/Hooks/useForceRerender'

interface HirerEditFormProps {
  hirer?: string
  eventId?: string
}

export default function HirerEditForm({ hirer, eventId }: HirerEditFormProps) {
  const [isEditingHirer, setIsEditingHirer] = useState(false)
  const { forceRerender, toggleForceRerender } = useForceRerender()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HirerEditFormProps>({
    defaultValues: {
      hirer,
    },
  })

  function onSubmit(data: HirerEditFormProps) {
    if (data.hirer && eventId) {
      eventRepository.updateEventHirer(data.hirer, eventId)
    }
    setIsEditingHirer((prev) => !prev)
    console.log('forceRerender antes do toggle', forceRerender)
    toggleForceRerender()
    console.log('forceRerender depois do toggle', forceRerender)
  }

  useEffect(() => {
    setValue('hirer', hirer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hirer])
  return (
    <div className="flex flex-row justify-center items-center gap-6 group">
      {isEditingHirer ? (
        <div className="w-3/5">
          <div className="flex flex-row w-full items-end gap-6">
            <Input
              className="w-full"
              id="apointmentTitle"
              labelName="Contratante"
              register={register('hirer', { required: true })}
            />
            <span
              onClick={() => handleSubmit(onSubmit)()}
              className="bg-navy-20 w-10 h-10 flex rounded-full justify-center items-center active:scale-90 hover:scale-95 hover:bg-navy-10 cursor-pointer"
            >
              <FaCheck />
            </span>
          </div>
          {errors.hirer?.type === 'required' && (
            <InputErrorMessage>Contratante é obrigatório *</InputErrorMessage>
          )}
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center">{hirer}</h1>
          <span
            onClick={() => {
              setIsEditingHirer((prev) => !prev)
            }}
            className="opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
          >
            <FaPencilAlt />
          </span>
        </>
      )}
    </div>
  )
}
