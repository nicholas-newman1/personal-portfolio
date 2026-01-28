'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import type { PortableTextBlock } from '@portabletext/types';
import ProjectAccordion from './ProjectAccordion';
import RichTextContent from './RichTextContent';
import AchievementBox from './AchievementBox';

interface Feature {
  title: string;
  description?: PortableTextBlock[];
}

interface Achievement {
  title: string;
  description?: string;
}

interface GalleryImage {
  url: string;
  caption?: string;
  alt?: string;
}

interface ProjectSectionsProps {
  projectTitle: string;
  overview?: PortableTextBlock[];
  technicalDetails?: PortableTextBlock[];
  features?: Feature[];
  achievements?: Achievement[];
  learnings?: PortableTextBlock[];
  gallery?: GalleryImage[];
}

export default function ProjectSections({
  projectTitle,
  overview,
  technicalDetails,
  features,
  achievements,
  learnings,
  gallery,
}: ProjectSectionsProps) {
  const sections = [];

  if (overview && overview.length > 0) {
    sections.push({
      id: 'overview',
      title: 'Overview',
      icon: '💡',
      content: <RichTextContent value={overview} />,
    });
  }

  if (technicalDetails && technicalDetails.length > 0) {
    sections.push({
      id: 'technical',
      title: 'Technical Deep Dive',
      icon: '⚙️',
      content: <RichTextContent value={technicalDetails} />,
    });
  }

  if (gallery && gallery.length > 0) {
    sections.push({
      id: 'gallery',
      title: 'Gallery',
      icon: '🖼️',
      content: (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 2,
          }}
        >
          {gallery.map((image, idx) => (
            <Box
              key={idx}
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'action.hover',
                '&:first-of-type': {
                  gridColumn: { sm: gallery.length > 1 ? '1 / -1' : undefined },
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: 200,
                    sm: idx === 0 && gallery.length > 1 ? 280 : 180,
                  },
                }}
              >
                <Image
                  src={image.url}
                  alt={image.alt || image.caption || `${projectTitle} screenshot ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              {image.caption && (
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    p: 1.5,
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  {image.caption}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      ),
    });
  }

  if (features && features.length > 0) {
    sections.push({
      id: 'features',
      title: 'Key Features',
      icon: '✨',
      content: (
        <Stack spacing={2}>
          {features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'action.hover',
                borderLeft: '3px solid',
                borderColor: 'primary.main',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, mb: feature.description && feature.description.length > 0 ? 1 : 0 }}
              >
                {feature.title}
              </Typography>
              {feature.description && feature.description.length > 0 && (
                <Box sx={{ '& > p:last-child': { mb: 0 } }}>
                  <RichTextContent value={feature.description} />
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      ),
    });
  }

  if (achievements && achievements.length > 0) {
    sections.push({
      id: 'achievements',
      title: 'Results & Impact',
      icon: '🏆',
      content: <AchievementBox achievements={achievements} showDetails />,
    });
  }

  if (learnings && learnings.length > 0) {
    sections.push({
      id: 'learnings',
      title: 'What I Learned',
      icon: '📚',
      content: <RichTextContent value={learnings} />,
    });
  }

  if (sections.length === 0) {
    return null;
  }

  return <ProjectAccordion sections={sections} defaultExpanded="overview" />;
}

