interface InputErrorMessageProps {
  children: string
}

export default function InputErrorMessage({
  children,
}: InputErrorMessageProps) {
  return <span className="text-sm text-red-500">{children}</span>
}
