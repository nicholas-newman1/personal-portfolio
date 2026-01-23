import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { client } from '@/sanity/client';
import { workExperienceQuery, educationQuery } from '@/sanity/queries';
import { WorkExperience, Education } from '@/sanity/types';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}

function formatYear(dateString?: string): string {
  if (!dateString) return '';
  return new Date(dateString).getFullYear().toString();
}

export default async function ExperiencePage() {
  const [experiences, educations] = await Promise.all([
    client.fetch<WorkExperience[]>(workExperienceQuery),
    client.fetch<Education[]>(educationQuery),
  ]);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          My professional journey and education
        </Typography>

        {/* Work Experience */}
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
          Work
        </Typography>
        <Stack spacing={3} sx={{ mb: 6 }}>
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

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
          Education
        </Typography>
        <Stack spacing={3}>
          {educations.map((edu) => (
            <Card key={edu._id}>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {edu.schoolLogoUrl && (
                    <Avatar
                      src={edu.schoolLogoUrl}
                      alt={edu.school}
                      variant="rounded"
                      sx={{ width: 48, height: 48 }}
                    />
                  )}
                  <Box>
                    <Typography variant="h6" component="h3">
                      {edu.schoolUrl ? (
                        <Link href={edu.schoolUrl} target="_blank" rel="noopener" color="inherit">
                          {edu.school}
                        </Link>
                      ) : (
                        edu.school
                      )}
                    </Typography>
                    <Typography variant="body1">
                      {edu.degree}
                      {edu.honors && ` · ${edu.honors}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatYear(edu.startDate)} - {formatYear(edu.endDate)}
                      {edu.gpa && ` · GPA: ${edu.gpa}`}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}

          {educations.length === 0 && (
            <Typography color="text.secondary">
              No education added yet. Add some in the Studio!
            </Typography>
          )}
        </Stack>
      </Box>
    </Container>
  );
}

