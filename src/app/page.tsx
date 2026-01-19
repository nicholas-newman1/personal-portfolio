import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h2" component="h1">
          Hello World
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Next.js + Material UI + Sanity
        </Typography>
      </Box>
    </Container>
  );
}
