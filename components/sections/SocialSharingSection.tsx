'use client';

import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';

const SocialSharingSection = () => {
  const handleReviveCity = () => {
    window.open(EVENT_INFO.ticketUrl, '_blank');
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#f9fafb',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 900,
              color: '#111827',
              textTransform: 'uppercase',
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            Spread the Word
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              color: '#6b7280',
              mb: 6,
              lineHeight: 1.7,
            }}
          >
            Let’s impact the community together through worship! Share our event poster online and invite your friends for a memorable Evening of praise, community, and powerful encounters.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleReviveCity}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1rem',
                fontWeight: 700,
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '4px',
                textTransform: 'uppercase',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              PRAISE in THE TOWN
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/share-OH"
              sx={{
                px: 5,
                py: 2,
                fontSize: '1rem',
                fontWeight: 700,
                borderColor: '#3b82f6',
                borderWidth: '2px',
                color: '#3b82f6',
                borderRadius: '4px',
                textTransform: 'uppercase',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#2563eb',
                  borderWidth: '2px',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                },
              }}
            >
              SHARE THE POSTER
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialSharingSection;
