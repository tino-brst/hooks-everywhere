import React from 'react'
import { fetch } from '../utils'

interface FetchOptions extends RequestInit {
  body?: any
}

export type useFetchOptions = {
  options?: FetchOptions
  autorun?: boolean
}

export function useFetch<T = any>(url: string, { options = {}, autorun = true }: useFetchOptions = {}) {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = React.useState(false)
  const optionsRef = React.useRef(options)

  optionsRef.current = options

  const makeRequest = React.useCallback(async () => {
    try {
      setIsLoading(true)
      const options = optionsRef.current
      const requestBody = options.body !== undefined ? JSON.stringify(options.body) : undefined
      const response = await fetch(url, { ...options, body: requestBody })
      const responseBody: T = await response.json()
      setData(responseBody)
    } finally {
      setIsLoading(false)
    }
  }, [url])

  React.useEffect(() => {
    if (autorun) {
      makeRequest()
    }
  }, [autorun, makeRequest])

  return { data, isLoading, makeRequest }
}

// TODO handle race conditions (didCancel)
// TODO handle errors and error states
// TODO T extends objects
