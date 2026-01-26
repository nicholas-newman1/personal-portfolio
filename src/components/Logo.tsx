'use client';

import { useTheme, alpha } from '@mui/material/styles';

interface LogoProps {
  size?: number;
  showShine?: boolean;
}

export default function Logo({ size = 36, showShine = false }: LogoProps) {
  const theme = useTheme();
  const gradientId = `logoShine-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" rx="96" fill={theme.palette.background.paper} />
      <path
        d="M152 384V128h56l120 176V128h56v256h-56L208 208v176h-56z"
        fill={theme.palette.primary.main}
      />
      {showShine && (
        <>
          <path
            d="M152 384V128h56l120 176V128h56v256h-56L208 208v176h-56z"
            fill={`url(#${gradientId})`}
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient
              id={gradientId}
              x1="152"
              y1="128"
              x2="384"
              y2="384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={alpha(theme.palette.primary.light, 1)} />
              <stop offset="1" stopColor={theme.palette.primary.main} stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  );
}

