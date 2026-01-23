'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
}));

const Title = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <AnimatedSection>
      <Box sx={{ mb: 6 }}>
        <Label variant="body2">{label}</Label>
        <Title variant="h2" component="h2">{title}</Title>
        <Description variant="body1">{description}</Description>
      </Box>
    </AnimatedSection>
  );
}
