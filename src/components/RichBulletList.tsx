import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children}</>,
  },
  marks: {
    strong: ({ children }) => (
      <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
        {children}
      </Box>
    ),
    em: ({ children }) => (
      <Box component="span" sx={{ fontStyle: 'italic' }}>{children}</Box>
    ),
  },
};

interface RichBulletListProps {
  bullets: PortableTextBlock[];
}

export default function RichBulletList({ bullets }: RichBulletListProps) {
  return (
    <Box 
      component="ul" 
      sx={{ 
        pl: 2.5, 
        mb: 2.5,
        '& li': {
          mb: 1,
          color: 'text.secondary',
          '&::marker': { color: 'primary.main' },
        },
      }}
    >
      {bullets.map((bullet, idx) => (
        <Typography 
          component="li" 
          variant="body2" 
          key={idx} 
          sx={{ lineHeight: 1.6 }}
        >
          <PortableText value={bullet} components={portableTextComponents} />
        </Typography>
      ))}
    </Box>
  );
}

