import Container from '@mui/material/Container'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import useForecast from '../model/use-forecast.hook'

export function Page() {
  const { location } = useParams()

  const forecast = useForecast(location)

  console.log('forecast:', forecast)

  const todayTemp = useMemo(() => {
    if (!forecast || !forecast[0]) {
      return '-'
    }
    const kelvinTemp = Number(forecast[0].main.temp)
    const celsiusTemp = Math.round(kelvinTemp - 273)
    return celsiusTemp
  }, [forecast])

  const todayWeather = useMemo(() => {
    if (!forecast || !forecast[0] || !forecast[0].weather[0]) {
      return ''
    }
    return forecast[0].weather[0].main
  }, [forecast])

  return (
    <main className="h-screen bg-gradient-to-b from-azur to-indigo">
      <Container className="h-full">
        <div className="h-full w-full flex flex-col">
          <div>Header</div>
          <div className="flex-grow flex flex-col justify-center items-center">
            <h1 className="mb-6 text-6xl uppercase text-white">{location}</h1>
            <div className="text-center">
              <p className="text-3xl text-white">{todayTemp}</p>
              <p className="text-2xl text-white">{todayWeather}</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
