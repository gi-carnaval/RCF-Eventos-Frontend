import Sidebar from '../organism/Sidebar'
import Header from '../organism/Header'
import { PopupProvider } from '../Contexts/PopupContext'
import RegularPopup from '../organism/Popup'

interface LayoutProps {
  children: React.ReactElement
}

export function PageLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PopupProvider>
        <Header />
        <div className="flex w-full">
          <Sidebar />
          <main className="relative top-24 left-24 w-[calc(100%_-_6rem)] p-6 z-0">
            {children}
          </main>
          <RegularPopup />
        </div>
      </PopupProvider>
    </div>
  )
}
