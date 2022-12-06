import { api } from 'src/shared/api'

const weatherUrl = process.env.WEATHER_API_URL || ''

export async function getLocationForecast(location: string) {
  try {
    const locationGeoData = await api.getLocationGeoData(location)
    const { lat, lon } = locationGeoData

    const { data } = await api.baseRequest.get(`${weatherUrl}/forecast`, {
      params: { lat, lon },
    })

    const currentHour = new Date().getHours()
    const acceptedHour = Math.round(currentHour / 3) * 3

    const forecastByCurrentHour = data.list.filter((forecastData: any) =>
      forecastData.dt_txt.includes(`${acceptedHour}:00:00`)
    )
    return forecastByCurrentHour
  } catch (error) {
    api.handleRequestError(error)
  }
}
