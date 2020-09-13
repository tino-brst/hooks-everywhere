import React from 'react'
import { runAppsScriptFunction } from '../utils'

type ContextValue = {
  token: string | undefined
  isAuthenticated: boolean
  authenticate: () => Promise<void>
  extendSession: () => Promise<void>
}
type ProviderProps = { children: React.ReactNode }

const AuthContext = React.createContext<ContextValue | undefined>(undefined)
AuthContext.displayName = 'AuthProvider'

function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = React.useState<string | undefined>(undefined)
  const isAuthenticated = token !== undefined

  const authenticate = React.useCallback(async function () {
    const newToken = await runAppsScriptFunction('getAuthToken')
    setToken(newToken)
  }, [])

  const extendSession = React.useCallback(async function () {
    const newToken = await runAppsScriptFunction('getAuthToken')
    setToken(newToken)
  }, [])

  const value = {
    token,
    isAuthenticated,
    authenticate,
    extendSession,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
