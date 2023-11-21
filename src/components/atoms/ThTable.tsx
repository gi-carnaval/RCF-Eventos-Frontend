import { tv, VariantProps } from 'tailwind-variants'

const th = tv({
  base: 'border-2 border-gray-80',
  variants: {
    size: {
      default: 'w-1/6',
      double: 'w-2/6',
    },
  },
})

interface ThTableProps extends VariantProps<typeof th> {
  children: string
}

export default function ThTable({ children, size }: ThTableProps) {
  return <th className={th({ size })}>{children}</th>
}
