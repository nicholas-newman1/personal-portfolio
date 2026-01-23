import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { client } from '@/sanity/client';
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries';
import { Project, SiteSettings } from '@/sanity/types';

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  return (
    <Container maxWidth="md">
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={600}>
          Nicholas Newman
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          Software Engineer
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            href="/experience"
            variant="contained"
            size="large"
          >
            View Experience
          </Button>
          {settings?.resumeUrl && (
            <Button
              href={settings.resumeUrl}
              target="_blank"
              rel="noopener"
              variant="outlined"
              size="large"
            >
              Download Resume
            </Button>
          )}
        </Stack>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Projects I&apos;ve built
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => (
            <Card key={project._id} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
              {project.imageUrl && (
                <CardMedia
                  component="img"
                  sx={{ width: { xs: '100%', sm: 200 }, height: { xs: 200, sm: 'auto' } }}
                  image={project.imageUrl}
                  alt={project.title}
                />
              )}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.title}
                  {project.featured && (
                    <Chip label="Featured" size="small" color="primary" sx={{ ml: 1 }} />
                  )}
                </Typography>
                {project.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                    {project.techStack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                  </Stack>
                )}
                {project.achievements && project.achievements.length > 0 && (
                  <Box sx={{ mb: 2, p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="caption" fontWeight="medium">
                      🏆 {project.achievements.map(a => a.title).join(', ')}
                    </Typography>
                  </Box>
                )}
                <Stack direction="row" spacing={2}>
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener">
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener">
                      GitHub
                    </Link>
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}

          {projects.length === 0 && (
            <Typography color="text.secondary">
              No projects yet. Add some in the Studio!
            </Typography>
          )}
        </Stack>
      </Box>
    </Container>
  );
}

