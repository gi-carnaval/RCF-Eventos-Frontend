import { ThHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function TableTh({
  className,
  ...props
}: React.DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>) {
  return (
    <th className={twMerge('text-gray-70', className)} {...props}>
      {props.children}
    </th>
  )
}
