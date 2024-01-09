import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import InputErrorMessage from '../atoms/InputErrorMessage'
import { usePopup } from '@/src/Hooks/usePopup'
import installmentRepository from '@/src/repositories/InstallmentRepository'
import { useEffect, useState } from 'react'
import { calcInstallments } from '@/src/lib/functions'

export interface FormData {
  downPayment: number
  installmentQuantity: number
  startDate: string
  installmentValue: number
}

interface InstallmentCreateFormProps {
  eventId?: string
  totalValue?: number
}

export function InstallmentCreateForm({
  eventId,
  totalValue,
}: InstallmentCreateFormProps) {
  const { closePopup } = usePopup()
  const [hasDownPayment, setHasDownPayment] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      installmentQuantity: 1,
      downPayment: 0,
    },
  })

  const quantidadeParcelas = watch('installmentQuantity')
  const valorEntrada = watch('downPayment')

  const valorDasparcelas = calcInstallments(
    totalValue,
    valorEntrada,
    quantidadeParcelas,
  )

  useEffect(() => {
    setValue('installmentValue', valorDasparcelas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valorDasparcelas])

  async function onSubmit(data: FormData) {
    const installmentsData = {
      downPayment: data.downPayment,
      installmentQuantity: data.installmentQuantity,
      startDate: data.startDate,
      installmentValue: data.installmentValue,
    }

    console.log('installmentData: ', installmentsData)

    await installmentRepository.createInstallments({
      ...installmentsData,
      eventId,
    })
    console.log(installmentsData, eventId)
    closePopup()
  }

  return (
    <>
      <div className="w-full flex justify-center items-center my-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            onClick={() => {
              setHasDownPayment((prev) => !prev)
            }}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-navy-20"></div>
        </label>
        <span className="mx-6 text-nowrap">
          {hasDownPayment ? <span>Desabilitar</span> : <span>Habilitar</span>}{' '}
          entrada
        </span>
      </div>
      <div className="flex flex-col gap-6 py-6">
        <div>
          {hasDownPayment ? (
            <>
              <Input
                className="w-full"
                labelName="Valor de Entrada"
                type="number"
                register={register('downPayment', {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {errors.installmentValue?.type === 'required' && (
                <InputErrorMessage>Valor é obrigatório *</InputErrorMessage>
              )}
            </>
          ) : null}
        </div>
        <div>
          <Input
            className="text-nowrap"
            id="installmentQuantity"
            labelName="Quantidade de Pagamentos"
            type="number"
            register={register('installmentQuantity', {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.installmentQuantity?.type === 'required' && (
            <InputErrorMessage>Quantidade é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Input
            id="appointmentDate"
            labelName="Data de Início"
            type="date"
            register={register('startDate', { required: true })}
          />
          {errors.startDate?.type === 'required' && (
            <InputErrorMessage>Data é obrigatório *</InputErrorMessage>
          )}
        </div>
        <div className="mb-6">
          <Input
            className="w-full"
            labelName="Valor por Parcela"
            type="number"
            disabled
            register={register('installmentValue', {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.installmentValue?.type === 'required' && (
            <InputErrorMessage>Valor é obrigatório *</InputErrorMessage>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
        <p>
          Valor Total: &nbsp;
          <span>
            {totalValue &&
              totalValue.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </p>
      </div>
    </>
  )
}
