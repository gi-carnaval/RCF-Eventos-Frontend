import { useContext } from 'react'
import { UpdateContext } from '../components/Contexts/UpdateContext'

export interface UpdateContextProps {
  shouldUpdate: boolean
  handleUpdate: () => void
}

export function useUpdateContext(): UpdateContextProps {
  const context = useContext(UpdateContext)
  if (!context) {
    throw new Error('useUpdateContext must be used within an UpdateProvider')
  }
  return context
}
