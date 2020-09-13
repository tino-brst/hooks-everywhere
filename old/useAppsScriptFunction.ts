import React from 'react'
import { runAppsScriptFunction } from '../src/utils/runAppsScriptFunction'

export function useAppsScriptFunction(name: string, args?: any) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState<any | undefined>(undefined)

  React.useEffect(() => {
    let didCancel = false

    const runFunction = async () => {
      setIsLoading(true)
      try {
        const data = await runAppsScriptFunction(name, args)

        if (!didCancel) {
          setData(data)
        }
      } finally {
        setIsLoading(false)
      }
    }

    runFunction()

    return () => {
      didCancel = true
    }
  }, [name, args])

  return { data, isLoading }
}
