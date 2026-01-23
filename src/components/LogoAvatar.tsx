'use client';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: theme.palette.action.hover,
}));

interface LogoAvatarProps {
  src: string;
  alt: string;
}

export default function LogoAvatar({ src, alt }: LogoAvatarProps) {
  return <StyledAvatar src={src} alt={alt} variant="rounded" />;
}
