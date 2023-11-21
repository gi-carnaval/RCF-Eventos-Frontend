import { FaPlus } from 'react-icons/fa'

export default function ButtonAdd() {
  return (
    <button className="group flex justify-center items-center mt-6 bg-[#ECECFE] text-navy-60 font-bold text-2xl rounded-[50%] w-12 h-12 hover:w-36 hover:rounded-full hover:scale-105 hover:p-3 transition-all">
      <FaPlus />
      <span className="text-sm hidden group-hover:block">
        Adicionar compromisso
      </span>
    </button>
  )
}
