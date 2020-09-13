import { User } from '../../models'
import { useFetch } from '../useFetch'

export function useUser(id: number) {
  return useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
}
