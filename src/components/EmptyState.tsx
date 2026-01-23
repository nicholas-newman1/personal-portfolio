'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  color: theme.palette.text.secondary,
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <AnimatedSection>
      <StyledBox>
        <Typography>{message}</Typography>
      </StyledBox>
    </AnimatedSection>
  );
}
