import installmentRepository from '@/src/repositories/InstallmentRepository'
import { Button } from '../atoms/Button'
import { usePopup } from '@/src/Hooks/usePopup'

interface InstallmentDeleteFormProps {
  eventId?: string
}

export function InstallmentDeleteForm({ eventId }: InstallmentDeleteFormProps) {
  const { closePopup } = usePopup()

  async function onSubmit(test: string) {
    console.log(test, eventId)
    await installmentRepository.deleteAllInstallments(eventId)

    closePopup()
  }

  return (
    <>
      <div className="flex flex-row gap-6 py-6 justify-center">
        <p>ATENÇÃO: Você deseja excluir todos os pagamentos?</p>
      </div>

      <div className="flex flex-row gap-6 py-6 justify-center">
        <Button className="bg-red-800" onClick={() => onSubmit('Teste')}>
          Excluir
        </Button>
      </div>
    </>
  )
}
