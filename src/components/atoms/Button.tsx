export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5"
    >
      <span>{props.children}</span>
    </button>
  )
}
