import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import { getLocationForecast } from '../api'

const weather: any[] = []

export function Page() {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('value:', event.target.value)
    const forecast = getLocationForecast(event.target.value)
    console.log('forecast:', forecast)
  }

  return (
    <main>
      <Container>
        <Box component={'form'} onSubmit={handleSubmit}>
          <TextField
            label="Enter a city"
            placeholder="Enter a city to check the weather"
            fullWidth
          />
        </Box>

        <Box>
          {weather.length ? (
            <>
              {weather.map((day) => {
                ;<Paper>{day}</Paper>
              })}
            </>
          ) : null}
        </Box>
      </Container>
    </main>
  )
}
