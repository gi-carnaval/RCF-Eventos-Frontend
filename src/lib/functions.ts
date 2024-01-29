import eventRepository from '../repositories/EventRepository'

interface GetEventTotalValueProps {
  photographicRegisterValue?: number
  albumValue?: number
  photoShootValue?: number
  makingOfValue?: number
  panelValue?: number
}

export function getEventTotalValue({
  photographicRegisterValue = 0,
  albumValue = 0,
  photoShootValue = 0,
  makingOfValue = 0,
  panelValue = 0,
}: GetEventTotalValueProps) {
  const eventTotalValue =
    photographicRegisterValue +
    albumValue +
    photoShootValue +
    makingOfValue +
    panelValue

  return eventTotalValue
}

export async function generateReport(id: string | undefined) {
  try {
    const response = await eventRepository.getEventReport(id)
    const blob = new Blob([response.data], { type: 'text/html' })
    const url = window.URL.createObjectURL(blob)
    window.open(url, '_blank')?.print()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error(error)
    alert('Error downloading PDF')
  }
}

export function calcInstallments(
  totalValue: number | undefined,
  downPaymentValue: number,
  InstallmentQuantity: number,
): number {
  if (
    Number.isNaN(InstallmentQuantity) ||
    InstallmentQuantity === 0 ||
    Number.isNaN(downPaymentValue)
  ) {
    return 0
  }
  if (!totalValue) {
    return 0
  }
  const restValue = totalValue - downPaymentValue
  const restInstallmentsQuantity = InstallmentQuantity
  const installmentValue = restValue / restInstallmentsQuantity
  return Number.parseFloat(installmentValue.toFixed(2)) // Ajuste para duas casas decimais
}
