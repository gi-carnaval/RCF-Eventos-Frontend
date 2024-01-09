export interface InstallmentsProps {
  id: string
  installmentNumber: number
  date: string
  installmentValue: number
}

export interface CreateInstallmentsProps {
  downPayment: number
  installmentQuantity: number
  startDate: string
  installmentValue: number
  eventId?: string
}
