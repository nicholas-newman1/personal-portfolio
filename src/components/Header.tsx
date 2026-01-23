'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';

interface HeaderProps {
  resumeUrl?: string;
}

export default function Header({ resumeUrl }: HeaderProps) {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <MuiLink
            href="/"
            underline="none"
            color="inherit"
            sx={{ fontWeight: 600, fontSize: '1.25rem' }}
          >
            NN
          </MuiLink>

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button href="/" color="inherit">
              Projects
            </Button>
            <Button href="/experience" color="inherit">
              Experience
            </Button>
            <Button href="/education" color="inherit">
              Education
            </Button>
            {resumeUrl && (
              <Button
                href={resumeUrl}
                target="_blank"
                rel="noopener"
                variant="outlined"
                size="small"
              >
                Resume
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
