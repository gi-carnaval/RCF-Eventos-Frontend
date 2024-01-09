import { useContext } from 'react'
import { ForceRerenderContext } from '../components/Contexts/ForceRerenderContext'

export interface ForceRerenderContextProps {
  forceRerender: boolean
  toggleForceRerender: () => void
}

export const useForceRerender = () => {
  const context = useContext(ForceRerenderContext)
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}
