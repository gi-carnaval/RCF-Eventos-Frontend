import Sidebar from '../organism/Sidebar'
import Header from '../organism/Header'
import { PopupProvider } from '../Contexts/PopupContext'
import RegularPopup from '../organism/Popup'

interface LayoutProps {
  children: React.ReactElement
}

export function PageLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full">
      <PopupProvider>
        <Header />
        <div className="flex w-full">
          <Sidebar />
          <main className="relative w-full p-6">{children}</main>
          <RegularPopup />
        </div>
      </PopupProvider>
    </div>
  )
}
