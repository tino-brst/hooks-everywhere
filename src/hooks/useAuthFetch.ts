import { useFetch, useFetchOptions } from './useFetch'
import { useAuth } from '../contexts/auth'

export function useAuthFetch<T = any>(url: string, { options = {}, autorun = true }: useFetchOptions = {}) {
  const { token } = useAuth()

  const optionsWithAuth = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  }

  return useFetch<T>(url, { options: optionsWithAuth, autorun })
}
