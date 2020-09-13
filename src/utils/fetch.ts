import { sleep } from './sleep'

export const fetch: typeof window.fetch = async (...args) => {
  await sleep(500)
  return window.fetch(...args)
}
