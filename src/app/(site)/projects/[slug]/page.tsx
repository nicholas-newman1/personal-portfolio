import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { client } from '@/sanity/client';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/queries';
import { Project } from '@/sanity/types';
import AnimatedSection from '@/components/AnimatedSection';
import SectionDivider from '@/components/SectionDivider';
import StatusChip from '@/components/StatusChip';
import ChipList from '@/components/ChipList';
import ProjectSections from '@/components/ProjectSections';

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(projectSlugsQuery);
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectBySlugQuery, { slug });

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectBySlugQuery, { slug });

  if (!project) {
    notFound();
  }

  const hasContentSections =
    (project.overview && project.overview.length > 0) ||
    (project.technicalDetails && project.technicalDetails.length > 0) ||
    (project.features && project.features.length > 0) ||
    (project.achievements && project.achievements.length > 0) ||
    (project.learnings && project.learnings.length > 0) ||
    (project.gallery && project.gallery.length > 0);

  return (
    <Container maxWidth="md">
      {/* Back Navigation */}
      <AnimatedSection>
        <Box sx={{ pt: { xs: 3, md: 4 } }}>
          <Link href="/#projects" style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Back to Projects
            </Button>
          </Link>
        </Box>
      </AnimatedSection>

      {/* Hero Section */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        {project.imageUrl && (
          <AnimatedSection>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 220, sm: 320, md: 400 },
                borderRadius: 3,
                overflow: 'hidden',
                mb: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </AnimatedSection>
        )}

        <AnimatedSection delay={100}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            {project.featured && <StatusChip label="Featured" />}
          </Box>
        </AnimatedSection>

        {(project.role || project.duration) && (
          <AnimatedSection delay={150}>
            <Stack
              direction="row"
              spacing={2}
              divider={
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    bgcolor: 'divider',
                    alignSelf: 'center',
                  }}
                />
              }
              sx={{ mb: 2 }}
            >
              {project.role && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {project.role}
                </Typography>
              )}
              {project.duration && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {project.duration}
                </Typography>
              )}
            </Stack>
          </AnimatedSection>
        )}

        {project.description && (
          <AnimatedSection delay={200}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 640,
              }}
            >
              {project.description}
            </Typography>
          </AnimatedSection>
        )}

        <AnimatedSection delay={250}>
          <ChipList items={project.techStack || []} sx={{ mb: 3 }} />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener"
                variant="contained"
                startIcon={<LaunchIcon />}
                sx={{ px: 3 }}
              >
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{ px: 3 }}
              >
                View Source
              </Button>
            )}
          </Stack>
        </AnimatedSection>
      </Box>

      {/* Content Sections Accordion */}
      {hasContentSections && (
        <Box sx={{ pb: { xs: 6, md: 10 } }}>
          <SectionDivider />
          <AnimatedSection delay={350}>
            <Box sx={{ mt: 4 }}>
              <ProjectSections
                projectTitle={project.title}
                overview={project.overview}
                technicalDetails={project.technicalDetails}
                features={project.features}
                achievements={project.achievements}
                learnings={project.learnings}
                gallery={project.gallery}
              />
            </Box>
          </AnimatedSection>
        </Box>
      )}
    </Container>
  );
}
