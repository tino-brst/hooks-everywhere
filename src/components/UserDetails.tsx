import * as React from 'react'
import { useAuthFetch, useFetch } from '../hooks'
import { useUser } from '../hooks/api'

export function UserDetails() {
  const [selectedUser, setSelectedUser] = React.useState(1)

  //#region fetch
  // const [data, setData] = React.useState(undefined)
  // const [isLoading, setIsLoading] = React.useState(false)

  // React.useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       setIsLoading(true)
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
  //       const responseBody = await response.json()
  //       setData(responseBody)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   makeRequest()
  // }, [selectedUser])
  //#endregion

  //#region useFetch
  // const { data, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
  //#endregion

  //#region useFetch + auth
  // const { data, isLoading } = useAuthFetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
  //#endregion

  //#region useUser 😎
  const { data, isLoading } = useUser(selectedUser)
  //#endregion

  return (
    <>
      <h2>User Details (id: {selectedUser})</h2>
      <button onClick={() => setSelectedUser((value) => value + 1)}> next user </button>
      {isLoading ? (
        <h3>Loading user ...</h3>
      ) : (
        data && (
          <>
            <br />
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </>
        )
      )}
    </>
  )
}
