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
          <main className="absolute top-24 left-48 w-[calc(100%_-_12rem)] p-6 mb-6 z-0">
            {children}
          </main>
          <RegularPopup />
        </div>
      </PopupProvider>
    </div>
  )
}
