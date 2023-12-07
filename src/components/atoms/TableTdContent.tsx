import { twMerge } from 'tailwind-merge'

export function TableTdContent({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={twMerge('text-base text-white-5 px-6 text-center', className)}
    >
      {props.children}
    </td>
  )
}
