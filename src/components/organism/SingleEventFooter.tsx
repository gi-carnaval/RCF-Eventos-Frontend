interface SingleEventFooterProps {
  totalValue: number
}

export function SingleEventFooter({ totalValue }: SingleEventFooterProps) {
  return (
    <footer className="absolute left-0 z-10 w-full h-24 bg-navy-60 border-t-2 border-navy-40">
      <div className="w-full h-full flex flex-row justify-end items-center p-6">
        <span>
          Valor Total:{' '}
          {totalValue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
    </footer>
  )
}
