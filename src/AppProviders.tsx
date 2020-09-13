import React from 'react'
import { AuthProvider } from './contexts/auth'

type Props = {
  children: React.ReactNode
}

export function AppProviders({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>
}
