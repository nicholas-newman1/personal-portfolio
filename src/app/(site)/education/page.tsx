import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { client } from '@/sanity/client';
import { educationQuery } from '@/sanity/queries';
import { Education } from '@/sanity/types';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}

export default async function EducationPage() {
  const educations = await client.fetch<Education[]>(educationQuery);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          My academic background and qualifications
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
                      {edu.startDate && formatDateRange(edu.startDate, edu.endDate)}
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

