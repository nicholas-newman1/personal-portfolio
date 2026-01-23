'use client';

import Chip from '@mui/material/Chip';
import { styled, alpha } from '@mui/material/styles';

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  color: theme.palette.primary.light,
  fontWeight: 500,
  fontSize: '0.7rem',
}));

interface StatusChipProps {
  label: string;
}

export default function StatusChip({ label }: StatusChipProps) {
  return <StyledChip label={label} size="small" />;
}
