'use client';

import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';
import { homeButtonPrimaryOnLightSx, homeButtonSecondaryOnLightSx } from '@/lib/buttonStyles';

const SocialSharingSection = () => {
  const handleReviveCity = () => {
    window.location.href = EVENT_INFO.ticketUrl;
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #0f172a 0%, #111827 45%, #1f2937 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          right: '-6%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.78)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Invite Someone
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 900,
              color: '#fff',
              textTransform: 'uppercase',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Spread the Word
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              color: 'rgba(255,255,255,0.78)',
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Let’s impact the community together through worship! Share our event poster online and invite your friends for a memorable Evening of praise, community, and powerful encounters.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 1.2,
              mb: 4,
            }}
          >
            {[
              'Download official event poster',
              'Post to your story and status',
              'Tag friends and invite your group',
            ].map((tip) => (
              <Box
                key={tip}
                sx={{
                  px: 1.5,
                  py: 1.2,
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>
                  {tip}
                </Typography>
              </Box>
            ))}
          </Box>

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
                ...homeButtonPrimaryOnLightSx,
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Book Your Ticket
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/share-MC"
              sx={{
                ...homeButtonSecondaryOnLightSx,
                width: { xs: '100%', sm: 'auto' },
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.72)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderColor: '#fff',
                  color: '#fff',
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
