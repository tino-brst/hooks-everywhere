import { sleep } from './sleep'

export async function runAppsScriptFunction(name: string, args?: any) {
  await sleep(1000)
  switch (name) {
    case 'getAuthToken':
      return (Math.random() * 10000).toFixed(0)
    default:
      throw new Error(`Apps Script function '${name}' not found`)
  }
}
