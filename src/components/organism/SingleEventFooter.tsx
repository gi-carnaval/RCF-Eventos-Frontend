import { generateReport } from '@/src/lib/functions'
import { Button } from '../atoms/Button'

interface SingleEventFooterProps {
  totalValue?: number
  eventId?: string
}

export function SingleEventFooter({
  totalValue,
  eventId,
}: SingleEventFooterProps) {
  return (
    <footer className="absolute left-0 z-10 w-full h-24 bg-navy-60 border-t-2 border-navy-40">
      <div className="w-full h-full flex flex-row justify-between items-center p-6 gap-16">
        <Button
          onClick={() => {
            generateReport(eventId)
          }}
        >
          Gerar Contrato
        </Button>
        <span>
          Valor Total:{' '}
          {totalValue &&
            totalValue.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
        </span>
      </div>
    </footer>
  )
}
