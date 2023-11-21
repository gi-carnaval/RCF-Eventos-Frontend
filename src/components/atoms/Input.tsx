import { UseFormRegisterReturn } from 'react-hook-form'
import { tv, VariantProps } from 'tailwind-variants'

const inputClasses = tv({
  base: 'flex flex-col',
  variants: {
    inputSize: {
      default: 'w-full',
      '25%': 'w-1/4',
      '50%': 'w-2/4',
      '75%': 'w-3/4',
    },
  },
})

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  labelName: string
  register: UseFormRegisterReturn<string>
  messageError?: string
  isRequired?: boolean
}

type combinedTypes = InputProps & VariantProps<typeof inputClasses>

export default function Input({
  labelName,
  register,
  inputSize,
  ...props
}: combinedTypes) {
  return (
    <div className={inputClasses({ inputSize })}>
      <label htmlFor={props.id} className="text-sm text-gray-50 mb-2">
        {labelName}
      </label>
      <input
        className="w- text-gray-70 bg-navy-60 px-5 py-2 rounded-lg border-[1px] border-gray-100"
        {...props}
        {...register}
      />
    </div>
  )
}
