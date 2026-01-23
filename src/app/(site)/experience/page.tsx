import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { client } from '@/sanity/client';
import { workExperienceQuery } from '@/sanity/queries';
import { WorkExperience } from '@/sanity/types';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}

export default async function ExperiencePage() {
  const experiences = await client.fetch<WorkExperience[]>(workExperienceQuery);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          My professional journey
        </Typography>
        <Stack spacing={3}>
          {experiences.map((exp) => (
            <Card key={exp._id}>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  {exp.companyLogoUrl && (
                    <Avatar
                      src={exp.companyLogoUrl}
                      alt={exp.company}
                      variant="rounded"
                      sx={{ width: 48, height: 48 }}
                    />
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Typography variant="h5" component="h3">
                        {exp.role}
                      </Typography>
                      {!exp.endDate && (
                        <Chip label="Current" size="small" color="success" />
                      )}
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary">
                      {exp.companyUrl ? (
                        <Link href={exp.companyUrl} target="_blank" rel="noopener" color="inherit">
                          {exp.company}
                        </Link>
                      ) : (
                        exp.company
                      )}
                      {' · '}
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </Typography>
                  </Box>
                </Box>

                {exp.bullets && exp.bullets.length > 0 && (
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {exp.bullets.map((bullet, idx) => (
                      <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                        {bullet}
                      </Typography>
                    ))}
                  </Box>
                )}

                {exp.skills && exp.skills.length > 0 && (
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                    {exp.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" variant="outlined" />
                    ))}
                  </Stack>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <Box sx={{ mt: 2, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      🏆 Achievements
                    </Typography>
                    {exp.achievements.map((achievement, idx) => (
                      <Box key={idx} sx={{ mb: 1 }}>
                        <Typography variant="body2" fontWeight="medium">
                          {achievement.title}
                        </Typography>
                        {achievement.description && (
                          <Typography variant="body2" color="text.secondary">
                            {achievement.description}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}

          {experiences.length === 0 && (
            <Typography color="text.secondary">
              No work experience added yet. Add some in the Studio!
            </Typography>
          )}
        </Stack>
      </Box>
    </Container>
  );
}

