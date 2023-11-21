import { FaPlus } from 'react-icons/fa'

export default function ButtonAdd(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="group flex active:scale-100 active:bg-zinc-300 justify-center items-center mt-6 bg-white-10 text-navy-60 font-bold text-2xl rounded-[50%] w-12 h-12 hover:w-36 hover:rounded-full hover:scale-105 hover:p-3 transition-all"
    >
      <FaPlus />
      <span className="text-sm hidden group-hover:block">
        Adicionar compromisso
      </span>
    </button>
  )
}
