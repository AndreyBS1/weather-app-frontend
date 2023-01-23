import { useEffect, useState } from 'react'
import { getLocationForecast } from '../api'

export default function useForecast(location: string | undefined) {
  const [forecast, setForecast] = useState<any>(null)

  useEffect(() => {
    async function getForecast() {
      if (!location) {
        return
      }
      const result = await getLocationForecast(location)
      if (result) {
        setForecast(result)
      }
    }
    getForecast()
  }, [location])

  return forecast
}
