import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { client } from '@/sanity/client';
import { projectsQuery, siteSettingsQuery, workExperienceQuery, educationQuery } from '@/sanity/queries';
import { Project, SiteSettings, WorkExperience, Education } from '@/sanity/types';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import StatusChip from '@/components/StatusChip';
import AchievementBox from '@/components/AchievementBox';
import EmptyState from '@/components/EmptyState';
import ChipList from '@/components/ChipList';
import LogoAvatar from '@/components/LogoAvatar';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} — ${end}`;
}

export default async function Home() {
  const [projects, settings, experiences, educations] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
    client.fetch<WorkExperience[]>(workExperienceQuery),
    client.fetch<Education[]>(educationQuery),
  ]);

  return (
    <Container maxWidth="md">
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          gap: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <AnimatedSection>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Software Engineer
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3.5rem' },
                fontWeight: 600,
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Nicholas Newman
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: { xs: 500, md: 420 },
                mx: { xs: 'auto', md: 0 },
                mb: 4,
                fontSize: '1.125rem',
                lineHeight: 1.7,
              }}
            >
              Building elegant solutions with modern technologies. 
              Passionate about clean code and great user experiences.
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              flexWrap="wrap"
              useFlexGap
            >
              <Button
                href="#experience"
                variant="contained"
                size="large"
                sx={{ px: 4, py: 1.5 }}
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
                  sx={{ px: 4, py: 1.5 }}
                >
                  Download Resume
                </Button>
              )}
            </Stack>
          </AnimatedSection>

          {(settings?.github || settings?.linkedIn) && (
            <AnimatedSection delay={400}>
              <Stack 
                direction="row" 
                spacing={1.5} 
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mt: 3 }}
              >
                {settings.github && (
                  <IconButton
                    href={settings.github}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
                {settings.linkedIn && (
                  <IconButton
                    href={settings.linkedIn}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                )}
              </Stack>
            </AnimatedSection>
          )}
        </Box>

        {settings?.headshotUrl && (
          <AnimatedSection delay={100}>
            <Box
              sx={{
                width: { xs: 200, sm: 260, md: 300 },
                height: { xs: 200, sm: 260, md: 300 },
                flexShrink: 0,
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            >
              <Image
                src={settings.headshotUrl}
                alt="Nicholas Newman"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </AnimatedSection>
        )}
      </Box>

      <SectionDivider />

      {/* Experience Section */}
      <Box id="experience" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: '80px' }}>
        <SectionHeader 
          label="Career"
          title="Experience"
          description="My professional journey and the impact I've made"
        />

        <Stack spacing={3}>
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp._id} delay={index * 100}>
              <Card>
                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5 }}>
                    {exp.companyLogoUrl && (
                      <LogoAvatar src={exp.companyLogoUrl} alt={exp.company} />
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mb: 0.5 }}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                          {exp.role}
                        </Typography>
                        {!exp.endDate && <StatusChip label="Current" />}
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {exp.companyUrl ? (
                          <Link 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener"
                            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                          >
                            {exp.company}
                          </Link>
                        ) : (
                          exp.company
                        )}
                        <Box component="span" sx={{ mx: 1, opacity: 0.5 }}>·</Box>
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </Typography>
                    </Box>
                  </Box>

                  {exp.bullets && exp.bullets.length > 0 && (
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
                      {exp.bullets.map((bullet, idx) => (
                        <Typography 
                          component="li" 
                          variant="body2" 
                          key={idx} 
                          sx={{ lineHeight: 1.6 }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  <ChipList 
                    items={exp.skills || []} 
                    sx={{ mb: exp.achievements && exp.achievements.length > 0 ? 2.5 : 0 }} 
                  />

                  {exp.achievements && exp.achievements.length > 0 && (
                    <AchievementBox achievements={exp.achievements} showDetails />
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}

          {experiences.length === 0 && (
            <EmptyState message="No work experience added yet. Add some in the Studio!" />
          )}
        </Stack>
      </Box>

      <SectionDivider />

      {/* Projects Section */}
      <Box id="projects" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: '80px' }}>
        <SectionHeader 
          label="Portfolio"
          title="Projects"
          description="A selection of projects I've built"
        />

        <Stack spacing={3}>
          {projects.map((project, index) => (
            <AnimatedSection key={project._id} delay={index * 100}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  overflow: 'hidden',
                }}
              >
                {project.imageUrl && (
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', sm: 220 }, 
                      height: { xs: 180, sm: 'auto' },
                      objectFit: 'cover',
                    }}
                    image={project.imageUrl}
                    alt={project.title}
                  />
                )}
                <CardContent sx={{ flex: 1, p: { xs: 2.5, sm: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                      {project.title}
                    </Typography>
                    {project.featured && <StatusChip label="Featured" />}
                  </Box>
                  
                  {project.description && (
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>
                  )}
                  
                  <ChipList items={project.techStack || []} sx={{ mb: 2.5 }} />
                  
                  {project.achievements && project.achievements.length > 0 && (
                    <Box sx={{ mb: 2.5 }}>
                      <AchievementBox achievements={project.achievements} />
                    </Box>
                  )}
                  
                  <Stack direction="row" spacing={3}>
                    {project.liveUrl && (
                      <Link 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener"
                        sx={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Live Demo →
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener"
                        sx={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        GitHub →
                      </Link>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}

          {projects.length === 0 && (
            <EmptyState message="No projects yet. Add some in the Studio!" />
          )}
        </Stack>
      </Box>

      <SectionDivider />

      {/* Education Section */}
      <Box id="education" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: '80px' }}>
        <SectionHeader 
          label="Background"
          title="Education"
          description="My academic foundation and qualifications"
        />

        <Stack spacing={3}>
          {educations.map((edu, index) => (
            <AnimatedSection key={edu._id} delay={index * 100}>
              <Card>
                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                    {edu.schoolLogoUrl && (
                      <LogoAvatar src={edu.schoolLogoUrl} alt={edu.school} />
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ fontWeight: 500, mb: 0.5 }}
                      >
                        {edu.schoolUrl ? (
                          <Link 
                            href={edu.schoolUrl} 
                            target="_blank" 
                            rel="noopener"
                            sx={{ 
                              color: 'text.primary', 
                              textDecoration: 'none',
                              '&:hover': { color: 'primary.main' } 
                            }}
                          >
                            {edu.school}
                          </Link>
                        ) : (
                          edu.school
                        )}
                      </Typography>
                      
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1.5, 
                          flexWrap: 'wrap',
                          mb: 0.5 
                        }}
                      >
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                          {edu.degree}
                        </Typography>
                        {edu.honors && <StatusChip label={edu.honors} />}
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                        {edu.startDate && (
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {formatDateRange(edu.startDate, edu.endDate)}
                          </Typography>
                        )}
                        {edu.gpa && (
                          <>
                            <Box 
                              component="span" 
                              sx={{ 
                                width: 4, 
                                height: 4, 
                                borderRadius: '50%', 
                                bgcolor: 'divider',
                              }} 
                            />
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'text.secondary',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                              }}
                            >
                              GPA: 
                              <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>
                                {edu.gpa}
                              </Box>
                            </Typography>
                          </>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}

          {educations.length === 0 && (
            <EmptyState message="No education added yet. Add some in the Studio!" />
          )}
        </Stack>
      </Box>

      {/* Footer spacing */}
      <Box sx={{ pb: 8 }} />
    </Container>
  );
}
