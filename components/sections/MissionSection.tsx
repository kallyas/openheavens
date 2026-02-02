'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container, Button } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';

const MissionSection = () => {
  const handleGetTicket = () => {
    window.open(EVENT_INFO.ticketUrl, '_blank');
  };

  const handleInviteFriend = () => {
    const message = `Join me at MAMA CONCERT 2026 on ${EVENT_INFO.date}! Tickets are CAD $100. Get yours at ${EVENT_INFO.ticketUrl}`;
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
            src="/images/event-img/img15.jpeg"
            alt="Mama Concert Crowd Desktop"
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
            src="/images/event-img/img15.jpeg"
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
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              m: 0,
              lineHeight: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
              willChange: 'transform',
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
            component="p"
            sx={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontFamily: 'var(--font-inter)',
              color: 'white',
              mt: '24px',
              mb: 6,
              lineHeight: 1.6,
              maxWidth: '500px',
              textAlign: 'inherit',
              textShadow: '0 2px 8px rgba(0,0,0,0.66), 0 0.5px 1px rgba(0,0,0,0.25)',
            }}
          >
            Mama Concert is the expression of a city on fire for Jesus. One heart, one sound as we celebrate worship in 2026.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            <Button
              variant="text"
              size="large"
              onClick={handleGetTicket}
              data-testid="tf-v1-popup"
              sx={{
                px: 4,
                py: 2,
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                backgroundColor: 'white',
                color: '#000',
                borderRadius: '8px',
                textTransform: 'uppercase',
                minWidth: { xs: '100%', sm: '200px' },
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              GET YOUR TICKET
            </Button>
            <Button
              variant="text"
              size="large"
              onClick={handleInviteFriend}
              data-testid="tf-v1-popup"
              sx={{
                px: 4,
                py: 2,
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                borderRadius: '8px',
                textTransform: 'uppercase',
                minWidth: { xs: '100%', sm: '200px' },
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              INVITE A FRIEND
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionSection;
