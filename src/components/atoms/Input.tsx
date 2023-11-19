import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  labelName: string
  register: UseFormRegisterReturn<string>
  messageError?: string
  isRequired?: boolean
}

export default function Input({ labelName, register, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="text-sm text-gray-50 mb-2">
        {labelName}
      </label>
      <input
        className="text-grey-70 bg-navy-60 px-5 py-2 rounded-lg border-[1px] border-gray-100"
        {...props}
        {...register}
      />
    </div>
  )
}
