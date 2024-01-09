import { api } from '../lib/axios'
import { CreateInstallmentsProps } from '../types/installments'

async function createInstallments(installmentsDatas: CreateInstallmentsProps) {
  return await api.post(`/installment`, {
    downPayment: installmentsDatas.downPayment,
    installmentQuantity: installmentsDatas.installmentQuantity,
    startDate: installmentsDatas.startDate,
    installmentValue: installmentsDatas.installmentValue,
    eventId: installmentsDatas.eventId,
  })
}

async function deleteAllInstallments(eventId: string | undefined) {
  return await api.delete('/installment/', {
    data: {
      eventId,
    },
  })
}

const installmentRepository = {
  createInstallments,
  deleteAllInstallments,
}

export default installmentRepository
