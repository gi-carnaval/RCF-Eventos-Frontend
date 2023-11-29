import { twMerge } from 'tailwind-merge'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5 hover:brightness-75 active:brightness-50',
        props.className,
      )}
    >
      <span>{props.children}</span>
    </button>
  )
}
