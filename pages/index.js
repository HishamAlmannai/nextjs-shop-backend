import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography varaint="h1">Welcome Home</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
