import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL
const appid = import.meta.env.VITE_API_KEY
const geoCodeUrl = import.meta.env.VITE_GEOCODE_API_URL

const baseRequest = axios.create({
  baseURL,
  timeout: 2500,
  params: { appid },
})

async function getLocationGeoData(location: string) {
  try {
    const { data } = await baseRequest.get(geoCodeUrl, {
      params: { q: location, limit: 1 },
    })
    return data[0]
  } catch (error: any) {
    throw error
  }
}

function handleRequestError(error: any) {
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

export const api = { baseRequest, getLocationGeoData, handleRequestError }
