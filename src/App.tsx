import * as React from 'react'
import { useAuth } from './contexts/auth'
import { Session, Feedback, UserDetails } from './components'

export function App() {
  const { isAuthenticated, authenticate } = useAuth()

  React.useEffect(() => {
    authenticate()
  }, [authenticate])

  return (
    <div className="App">
      {!isAuthenticated ? (
        <h2>Authenticating ...</h2>
      ) : (
        <>
          <Session />
          <hr />
          <Feedback />
          <hr />
          <UserDetails />
        </>
      )}
    </div>
  )
}
