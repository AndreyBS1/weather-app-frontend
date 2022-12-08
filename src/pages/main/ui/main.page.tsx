import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FocusEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const locationRegEx =
  /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
const errorMessage = 'Invalid location name!'

export function Page() {
  const navigate = useNavigate()

  const [query, setQuery] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    setQuery(value)
    if (isError) {
      setIsError(false)
    }
  }

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const { value } = event.target
    if (!locationRegEx.test(value)) {
      setIsError(true)
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!locationRegEx.test(query)) {
      setIsError(true)
      return
    }
    if (!isError) {
      navigate(`/${query}`)
    }
  }

  return (
    <main>
      <Container>
        <Box component={'form'} onSubmit={handleSubmit}>
          <TextField
            type="search"
            label="Enter a city to check the weather"
            autoComplete="off"
            fullWidth
            error={isError}
            helperText={isError ? errorMessage : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Container>
    </main>
  )
}
