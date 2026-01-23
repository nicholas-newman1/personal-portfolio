'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Theme } from '@mui/material/styles';

interface HeaderProps {
  resumeUrl?: string;
}

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

const navItemStyles = {
  color: 'text.secondary',
  fontSize: '0.875rem',
  fontWeight: 400,
  px: 2,
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
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
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))',
                },
              }}
            >
              <svg width="36" height="36" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" rx="96" fill="#09090b"/>
                <path 
                  d="M152 384V128h56l120 176V128h56v256h-56L208 208v176h-56z" 
                  fill="#10b981"
                />
                <path 
                  d="M152 384V128h56l120 176V128h56v256h-56L208 208v176h-56z" 
                  fill="url(#headerShine)"
                  fillOpacity="0.3"
                />
                <defs>
                  <linearGradient id="headerShine" x1="152" y1="128" x2="384" y2="384" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399"/>
                    <stop offset="1" stopColor="#10b981" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </MuiLink>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button key={item.label} href={item.href} sx={navItemStyles}>
                  {item.label}
                </Button>
              ))}
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

            {/* Mobile Hamburger */}
            <IconButton
              aria-label="open navigation menu"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 300,
            backgroundColor: 'background.default',
            backgroundImage: 'none',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={handleNavClick}
                  sx={{
                    py: 2,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: (theme: Theme) => `${theme.palette.primary.main}14`,
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {resumeUrl && (
            <Box sx={{ mt: 3, px: 2 }}>
              <Button
                href={resumeUrl}
                target="_blank"
                rel="noopener"
                variant="outlined"
                fullWidth
                sx={{
                  py: 1.5,
                  borderColor: (theme: Theme) => `${theme.palette.primary.main}80`,
                  color: 'primary.main',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: (theme: Theme) => `${theme.palette.primary.main}1a`,
                  },
                }}
              >
                Resume
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}
