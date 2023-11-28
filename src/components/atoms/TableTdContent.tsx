import { twMerge } from 'tailwind-merge'

export function TableTdContent({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={twMerge('text-base text-white-5 px-6', className)}>
      {props.children}
    </td>
  )
}
