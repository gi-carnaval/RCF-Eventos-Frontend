import eventRepository from '../repositories/EventRepository'

interface GetEventTotalValueProps {
  photographicRegisterValue?: number
  albumValue?: number
  preWeddingValue?: number
  makingOfValue?: number
  panelValue?: number
}

export function getEventTotalValue({
  photographicRegisterValue = 0,
  albumValue = 0,
  preWeddingValue = 0,
  makingOfValue = 0,
  panelValue = 0,
}: GetEventTotalValueProps) {
  const eventTotalValue =
    photographicRegisterValue +
    albumValue +
    preWeddingValue +
    makingOfValue +
    panelValue

  return eventTotalValue
}

export async function generateReport(id: string | undefined) {
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
