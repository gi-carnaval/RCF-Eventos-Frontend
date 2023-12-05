import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string
  register: UseFormRegisterReturn<string>
  messageError?: string
  isRequired?: boolean
  active?: boolean
}

export default function Input({
  labelName,
  active = true,
  className,
  register,
  ...props
}: InputProps) {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <label htmlFor={props.id} className="text-sm text-gray-50 mb-2">
        {labelName}
      </label>
      <input
        data-active={active}
        className="text-gray-70 bg-navy-60 px-5 py-2 rounded-lg border-[1px] border-gray-100 data-[active=false]:brightness-75 data-[active=false]:cursor-not-allowed"
        {...props}
        {...register}
      />
    </div>
  )
}
