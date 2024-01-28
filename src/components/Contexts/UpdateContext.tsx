import { UpdateContextProps } from '@/src/Hooks/useUpdate'
import React, { createContext, useState, ReactNode } from 'react'

export const UpdateContext = createContext<UpdateContextProps | undefined>(
  undefined,
)

interface UpdateProviderProps {
  children: ReactNode
}

export function UpdateProvider({ children }: UpdateProviderProps) {
  const [shouldUpdate, setShouldUpdate] = useState(false)

  const handleUpdate = () => {
    setTimeout(() => {
      setShouldUpdate(!shouldUpdate)
    }, 500)
  }

  const contextValue: UpdateContextProps = {
    shouldUpdate,
    handleUpdate,
  }

  return (
    <UpdateContext.Provider value={contextValue}>
      {children}
    </UpdateContext.Provider>
  )
}
