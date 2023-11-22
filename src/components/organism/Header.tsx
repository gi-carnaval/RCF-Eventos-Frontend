import { usePopup } from '../../Hooks/usePopup'
import RCFLogo from '../../assets/Logo-RCF-Eventos.png'
import CreateEventForm from '../molecules/CreateEventForm'

export default function Header() {
  const { openPopup, applyContent } = usePopup()

  const popupContent = {
    title: 'Adicionar Evento',
    content: <CreateEventForm />,
  }

  return (
    <header className="fixed z-10 w-screen h-24 bg-navy-60 flex border-b-2 border-b-navy-40">
      <div className="w-24 border-r-2 border-r-navy-40 p-6">
        <img
          src={RCFLogo}
          alt="Ricardo Caranval Fotografia Eventos Logo"
          className=""
        />
      </div>
      <div className="flex justify-start items-center w-3/4">
        <h1 className="px-6 font-bold text-2xl">Eventos</h1>
      </div>
      <div className="flex justify-start items-center">
        <a
          onClick={() => {
            openPopup()
            applyContent(popupContent)
          }}
          className="bg-navy-20 rounded-3xl h-12 flex justify-center items-center px-5 cursor-pointer"
        >
          Adicionar Novo Evento
        </a>
      </div>
    </header>
  )
}
