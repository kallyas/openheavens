'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';

const MissionSection = () => {
  const handleGetTicket = () => {
    window.open(EVENT_INFO.ticketUrl, '_blank');
  };

  const handleInviteFriend = () => {
    const message = `Join me at Open Heavens Toronto 2025! A FREE New Year's Eve Gospel Concert on December 31st. Register for your free ticket at ${EVENT_INFO.ticketUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '600px', md: '700px' },
      }}
    >
      {/* Background Images */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* Desktop Image */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            inset: 0,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1472653431158-6364773b2729?q=80&w=2669&auto=format&fit=crop"
            alt="Open Heavens Crowd"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {/* Mobile Image */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            inset: 0,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1459749411177-d04bf98544e8?q=80&w=2670&auto=format&fit=crop"
            alt="Open Heavens Crowd Mobile"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
          }}
        />
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 10, md: 16 },
        }}
      >
        <Box sx={{ maxWidth: '800px' }}>
          {/* Main Headline */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              mb: 3,
              lineHeight: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
            }}
          >
            ONE HEART,
            <br />
            ONE VOICE,
            <br />
            ONE GOD
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'white',
              mb: 6,
              lineHeight: 1.6,
              maxWidth: '500px',
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
            }}
          >
            Open Heavens is the expression of a city on fire for Jesus. One heart, one sound as
            we cross into 2026.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleGetTicket}
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
              GET YOUR FREE TICKET
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleInviteFriend}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1rem',
                fontWeight: 700,
                borderColor: 'white',
                borderWidth: '2px',
                color: 'white',
                borderRadius: '4px',
                textTransform: 'uppercase',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: 'white',
                  borderWidth: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              INVITE A FRIEND
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionSection;
