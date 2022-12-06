import { Box, Container, Paper, TextField } from "@mui/material";

const weather: any[] = [];

export function Page() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("value:", event.target.value);
  };

  return (
    <main>
      <Container>
        <Box component={"form"} onSubmit={handleSubmit}>
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
                <Paper>{day}</Paper>;
              })}
            </>
          ) : null}
        </Box>
      </Container>
    </main>
  );
}
