"use client";

import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
import type { AccordionItem } from "@/types";

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={className} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((item) => (
        <MuiAccordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          disableGutters
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderLeft: 'none',
            borderRight: 'none',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === item.id ? (
                <FaMinus style={{ color: 'white', fontSize: '1.25rem' }} />
              ) : (
                <FaPlus style={{ color: 'white', fontSize: '1.25rem' }} />
              )
            }
            sx={{
              px: 0,
              py: 2,
              minHeight: 'auto',
              '&.Mui-expanded': {
                minHeight: 'auto',
              },
              '& .MuiAccordionSummary-content': {
                margin: 0,
                '&.Mui-expanded': {
                  margin: 0,
                },
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '1.25rem',
                color: 'white',
                letterSpacing: '0.025em'
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              px: 0,
              pb: 3,
              pt: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#d1d5db',
                lineHeight: 1.625,
                fontSize: '1.125rem',
                letterSpacing: '0.015em'
              }}
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  );
};

export default Accordion;
