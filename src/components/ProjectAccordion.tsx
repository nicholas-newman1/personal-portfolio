'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, alpha } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundImage: 'none',
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
  boxShadow: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.3),
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  minHeight: 64,
  '&.Mui-expanded': {
    minHeight: 64,
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1.5, 0),
    '&.Mui-expanded': {
      margin: theme.spacing(1.5, 0),
    },
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 2.5, 2.5, 2.5),
  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
  paddingTop: theme.spacing(2.5),
}));

interface AccordionSection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

interface ProjectAccordionProps {
  sections: AccordionSection[];
  defaultExpanded?: string;
}

export default function ProjectAccordion({ sections, defaultExpanded }: ProjectAccordionProps) {
  const [expanded, setExpanded] = useState<string[]>(
    defaultExpanded ? [defaultExpanded] : sections[0]?.id ? [sections[0].id] : []
  );

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) =>
      isExpanded
        ? [...prev, panel]
        : prev.filter((id) => id !== panel)
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {sections.map((section) => (
        <StyledAccordion
          key={section.id}
          expanded={expanded.includes(section.id)}
          onChange={handleChange(section.id)}
          disableGutters
        >
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${section.id}-content`}
            id={`${section.id}-header`}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <span>{section.icon}</span>
              {section.title}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {section.content}
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}

