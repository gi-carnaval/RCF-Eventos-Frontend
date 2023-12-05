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
