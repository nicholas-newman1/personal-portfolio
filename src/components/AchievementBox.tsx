'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  borderRadius: theme.spacing(1.5),
  borderLeft: `2px solid ${theme.palette.primary.main}`,
}));

const AchievementTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  fontSize: '0.8125rem',
}));

const AchievementItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const AchievementItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.8125rem',
}));

const AchievementSummary = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 500,
}));

interface Achievement {
  title: string;
  description?: string;
}

interface AchievementBoxProps {
  achievements: Achievement[];
  showDetails?: boolean;
}

export default function AchievementBox({ achievements, showDetails = false }: AchievementBoxProps) {
  return (
    <StyledBox>
      {showDetails ? (
        <>
          <AchievementTitle variant="body2">
            🏆 Achievements
          </AchievementTitle>
          {achievements.map((achievement, idx) => (
            <Box key={idx} sx={{ mb: idx < achievements.length - 1 ? 1 : 0 }}>
              <AchievementItemTitle variant="body2">
                {achievement.title}
              </AchievementItemTitle>
              {achievement.description && (
                <AchievementItemDescription variant="body2">
                  {achievement.description}
                </AchievementItemDescription>
              )}
            </Box>
          ))}
        </>
      ) : (
        <AchievementSummary variant="body2">
          🏆 {achievements.map(a => a.title).join(', ')}
        </AchievementSummary>
      )}
    </StyledBox>
  );
}
