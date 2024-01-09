import { ForceRerenderContextProps } from '@/src/Hooks/useForceRerender'
import { createContext, useState } from 'react'

interface ForceRerenderProps {
  children: React.ReactNode
}

export const ForceRerenderContext = createContext<
  ForceRerenderContextProps | undefined
>(undefined)

export const ForceRerenderProvider = ({ children }: ForceRerenderProps) => {
  const [forceRerender, setForceRerender] = useState(false)

  const toggleForceRerender = () => {
    setForceRerender((prev) => !prev)
  }

  const contextValue: ForceRerenderContextProps = {
    forceRerender,
    toggleForceRerender,
  }

  return (
    <ForceRerenderContext.Provider value={contextValue}>
      {children}
    </ForceRerenderContext.Provider>
  )
}
