import React from 'react'
import { sleep } from '../utils'

export type useFetchOptions = {
  options?: RequestInit
  autorun?: boolean
}

export function useFetch<T = any>(url: string, { options = {}, autorun = true }: useFetchOptions = {}) {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = React.useState(false)

  const makeRequest = React.useCallback(
    async (body?: any) => {
      try {
        setIsLoading(true)
        const requestBody = body !== undefined ? JSON.stringify(body) : undefined
        const response = await fetch(url, { ...options, body: requestBody })
        const responseBody: T = await response.json()
        await sleep(500)
        setData(responseBody)
      } finally {
        setIsLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url],
  )

  React.useEffect(() => {
    if (autorun) {
      makeRequest()
    }
  }, [autorun, makeRequest])

  return { data, isLoading, makeRequest }
}

// TODO handle race conditions (didCancel)
// TODO handle errors and error states
// TODO type makeRequest params
// TODO T extends objects
