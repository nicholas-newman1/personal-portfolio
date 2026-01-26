'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { alpha, useTheme } from '@mui/material/styles';
import Logo from './Logo';

interface FooterProps {
  github?: string;
  linkedIn?: string;
}

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const techStack = [
  { name: 'Next.js', url: 'https://nextjs.org' },
  { name: 'React', url: 'https://react.dev' },
  { name: 'MUI', url: 'https://mui.com' },
  { name: 'Sanity', url: 'https://sanity.io' },
  { name: 'TypeScript', url: 'https://typescriptlang.org' },
];

export default function Footer({ github, linkedIn }: FooterProps) {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: alpha(theme.palette.background.default, theme.palette.mode === 'dark' ? 0.6 : 0.8),
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              gap: { xs: 5, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: 280 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Logo size={28} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Nicholas Newman
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', lineHeight: 1.7 }}
              >
                Software Engineer crafting elegant solutions with modern technologies.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 2,
                }}
              >
                Connect
              </Typography>
              <Stack direction="row" spacing={0.5}>
                {github && (
                  <IconButton
                    href={github}
                    target="_blank"
                    rel="noopener"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}
                {linkedIn && (
                  <IconButton
                    href={linkedIn}
                    target="_blank"
                    rel="noopener"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                )}
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 4, md: 5 } }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', sm: 'center' },
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}
            >
              © {currentYear} Nicholas Newman. All rights reserved.
            </Typography>

            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              sx={{ gap: 0.75 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                }}
              >
                Built with
              </Typography>
              {techStack.map((tech, index) => (
                <Box key={tech.name} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Link
                    href={tech.url}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                      opacity: 0.8,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        opacity: 1,
                      },
                    }}
                  >
                    {tech.name}
                  </Link>
                  {index < techStack.length - 1 && (
                    <Box
                      component="span"
                      sx={{
                        mx: 0.75,
                        color: 'text.secondary',
                        opacity: 0.4,
                        fontSize: '0.75rem',
                      }}
                    >
                      ·
                    </Box>
                  )}
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

