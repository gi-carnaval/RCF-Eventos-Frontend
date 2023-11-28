interface ButtonHoverIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export function ButtonHoverIcon({ icon, ...props }: ButtonHoverIconProps) {
  return (
    <button
      {...props}
      className="group relative flex gap-2 active:scale-100 active:bg-zinc-300 justify-center items-center mt-6 bg-white-10 text-navy-60 font-bold text-2xl rounded-[50%] w-12 h-12 hover:w-36 hover:rounded-full hover:scale-105 hover:p-3 transition-all"
    >
      {icon}
      <span className="text-sm hidden group-hover:block">{props.children}</span>
    </button>
  )
}
