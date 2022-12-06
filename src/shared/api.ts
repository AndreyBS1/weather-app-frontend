import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL
const appid = process.env.REACT_APP_API_KEY
const geoCodeUrl = process.env.REACT_APP_GEOCODE_API_URL || ''

export const baseRequest = axios.create({
  baseURL,
  timeout: 2500,
  params: { appid },
})

export async function getLocationCoordinates(location: string) {
  try {
    const { data } = await baseRequest.get(geoCodeUrl, {
      params: { q: location, limit: 1 },
    })
    return data
  } catch (error: any) {
    throw error
  }
}

export function handleRequestError(error: any) {
  console.group('Request error')
  if (error.response) {
    console.log('data:', error.response.data)
    console.log('status:', error.response.status)
    console.log('headers:', error.response.headers)
  } else if (error.request) {
    console.log('request:', error.request)
  } else {
    console.log('message:', error.message)
  }
  console.log('config:', error.config)
  console.groupEnd()
}
