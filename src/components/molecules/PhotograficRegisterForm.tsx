import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'

interface FormProps {
  professionalQuantity: string
  photoAverage: string
  value: string
}

export function PhotograficRegisterForm() {
  const { closePopup } = usePopup()
  const { register, handleSubmit } = useForm<FormProps>()

  async function onSubmit(data: FormProps) {
    alert('Criar')
    console.log(data)
    closePopup()
  }

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex flex-row gap-6 items-end justify-center">
        <Input
          className="w-1/3"
          labelName="Quantidade de Profissionais"
          id="photograficRegister"
          type="number"
          register={register('professionalQuantity')}
        />
        <Input
          className="w-1/3"
          labelName="Média de Fotos"
          id="photograficRegister"
          type="number"
          register={register('photoAverage')}
        />
        <Input
          className="w-1/4"
          labelName="Valor"
          id="photograficRegister"
          type="number"
          register={register('value')}
        />
      </div>
      <Button onClick={() => handleSubmit(onSubmit)()}>Adicionar</Button>
    </div>
  )
}
