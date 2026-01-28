'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const richTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          mb: 2,
          lineHeight: 1.8,
          '&:last-child': { mb: 0 },
        }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 500,
          mb: 2,
          mt: 3,
          '&:first-of-type': { mt: 0 },
        }}
      >
        {children}
      </Typography>
    ),
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
    code: ({ children }) => (
      <Box
        component="code"
        sx={{
          bgcolor: 'action.selected',
          px: 0.75,
          py: 0.25,
          borderRadius: 0.5,
          fontFamily: 'monospace',
          fontSize: '0.875em',
        }}
      >
        {children}
      </Box>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Box
        component="ul"
        sx={{
          pl: 2.5,
          mb: 2,
          '& li': {
            color: 'text.secondary',
            mb: 1,
            '&::marker': { color: 'primary.main' },
          },
        }}
      >
        {children}
      </Box>
    ),
    number: ({ children }) => (
      <Box
        component="ol"
        sx={{
          pl: 2.5,
          mb: 2,
          '& li': {
            color: 'text.secondary',
            mb: 1,
            '&::marker': { color: 'primary.main' },
          },
        }}
      >
        {children}
      </Box>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

interface RichTextContentProps {
  value: PortableTextBlock[];
}

export default function RichTextContent({ value }: RichTextContentProps) {
  return <PortableText value={value} components={richTextComponents} />;
}

