import { useContext } from 'react'
import {
  PopupContentProps,
  PopupContext,
} from '../components/Contexts/PopupContext'
export interface PopupContextProps {
  isPopupOpen: boolean
  popupContent: PopupContentProps | undefined
  applyContent: (popupContent: PopupContentProps) => void
  openPopup: () => void
  closePopup: () => void
}

export const usePopup = (): PopupContextProps => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}
