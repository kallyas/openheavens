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
    const message = `Join Us at MAMA CONCERT 2026 At A  FREE of CAD $100 on November 28th. Register for your free ticket at ${EVENT_INFO.ticketUrl}`;
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
            src="images/event-img/img15.jpeg"
            alt="Open Heaven Crowd"
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
            src="images/event-img/img15.jpeg"
            alt="Mama Concert Crowd Mobile"
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
              mb: 0, // raw.html has margin:0
              lineHeight: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
              willChange: 'transform',
            }}
          >
            ONE GOD,
            <br />
            ONE WORSHIP,
            <br />
            ONE GOD
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontFamily: 'var(--font-inter)', // Assuming this var exists or will fall back
              color: 'white',
              mt: '24px',
              mb: 6,
              lineHeight: 1.6,
              maxWidth: '500px',
              textAlign: 'inherit',
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
            }}
          >
            MAMA CONCERT is a gospel concert experience bringing together believers from all walks of life to worship, connect, and be transformed. Join us for an unforgettable night of powerful music, inspiring messages, and a celebration of faith that unites us all.
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
              data-testid="tf-v1-popup"
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
              data-testid="tf-v1-popup"
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
