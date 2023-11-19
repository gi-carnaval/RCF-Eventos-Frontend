import { createContext, useState } from 'react'
import { PopupContextProps } from '../../Hooks/useModal'

export const PopupContext = createContext<PopupContextProps | undefined>(
  undefined,
)

interface PopupProviderProps {
  children: React.ReactNode
}

export interface PopupContentProps {
  title: string
  content: JSX.Element | React.ReactNode
}

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupContent, setPopupContent] = useState<
    PopupContentProps | undefined
  >()

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const applyContent = (popupContent: PopupContentProps) => {
    setPopupContent(popupContent)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const contextValue: PopupContextProps = {
    isPopupOpen,
    popupContent,
    applyContent,
    openPopup,
    closePopup,
  }
  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  )
}
