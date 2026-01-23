'use client';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledChip = styled(Chip)({
  fontSize: '0.7rem',
});

interface ChipListProps {
  items: string[];
  sx?: object;
}

export default function ChipList({ items, sx }: ChipListProps) {
  if (!items || items.length === 0) return null;
  
  return (
    <Stack 
      direction="row" 
      spacing={0.75} 
      flexWrap="wrap" 
      useFlexGap 
      sx={sx}
    >
      {items.map((item) => (
        <StyledChip 
          key={item} 
          label={item} 
          size="small" 
          variant="outlined"
        />
      ))}
    </Stack>
  );
}
