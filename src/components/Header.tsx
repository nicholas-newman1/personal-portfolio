'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import { Theme } from '@mui/material/styles';

interface HeaderProps {
  resumeUrl?: string;
}

const navItemStyles = {
  color: 'text.secondary',
  fontSize: '0.875rem',
  fontWeight: 400,
  px: { xs: 1.5, sm: 2 },
  py: 1,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 6,
    left: '50%',
    transform: 'translateX(-50%) scaleX(0)',
    width: '70%',
    height: '2px',
    background: (theme: Theme) => `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    borderRadius: '2px',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '&:hover': {
    color: 'primary.main',
    backgroundColor: 'transparent',
    '&::before': {
      transform: 'translateX(-50%) scaleX(1)',
    },
  },
};

export default function Header({ resumeUrl }: HeaderProps) {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: (theme: Theme) => `rgba(${theme.palette.mode === 'dark' ? '9, 9, 11' : '255, 255, 255'}, 0.8)`,
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 72 } }}>
          <MuiLink
            href="/"
            underline="none"
            sx={{ 
              fontWeight: 600, 
              fontSize: '1.25rem',
              color: 'text.primary',
              letterSpacing: '-0.02em',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                textShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.main}80`,
              },
            }}
          >
            NN
          </MuiLink>

          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, alignItems: 'center' }}>
            <Button href="#projects" sx={navItemStyles}>
              Projects
            </Button>
            <Button href="#experience" sx={navItemStyles}>
              Experience
            </Button>
            <Button href="#education" sx={navItemStyles}>
              Education
            </Button>
            {resumeUrl && (
              <Button
                href={resumeUrl}
                target="_blank"
                rel="noopener"
                variant="outlined"
                size="small"
                sx={{
                  ml: 1,
                  borderColor: (theme: Theme) => `${theme.palette.primary.main}80`,
                  color: 'primary.main',
                  fontSize: '0.8125rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: (theme: Theme) => `${theme.palette.primary.main}1a`,
                    boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.main}33`,
                  },
                }}
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
