import React from 'react'
import { useAuth } from '../contexts/auth'

export function Session() {
  const { token, extendSession } = useAuth()

  return (
    <>
      <h2>Session</h2>
      <p>
        <code>token: {token}</code>
      </p>
      <button onClick={extendSession}> extend session </button>
    </>
  )
}
