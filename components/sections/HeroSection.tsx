'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Container, Link as MuiLink, Button } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';
import { homeButtonPrimaryOnDarkSx, homeButtonSecondaryOnDarkSx } from '@/lib/buttonStyles';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
};

const getCountdown = (eventDate: Date): Countdown => {
  const now = new Date().getTime();
  const distance = Math.max(eventDate.getTime() - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
  };
};

const HeroSection = () => {
  const eventDate = useMemo(() => new Date(`${EVENT_INFO.date} 18:00:00`), []);
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown(eventDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown(eventDate));
    }, 60_000);

    return () => window.clearInterval(interval);
  }, [eventDate]);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          src="/images/event-img/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          }}
        />
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box>
          {/* Title */}
          <Box
            sx={{
              fontSize: { xs: '3.5rem', sm: '5.5rem', md: '8rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.6)',
              mb: 4,
            }}
          >
            {/* First Line: MAMA with 2026 badge */}
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                mb: 1,
              }}
            >
              <Box component="span">MAMA</Box>
            </Box>

            {/* Second Line: CONCERT */}
            <Box component="div">CONCERT</Box>
          </Box>

          {/* Venue */}
          <MuiLink
            href={EVENT_INFO.venue.googleMapsUrl}
            underline="none"
            sx={{ color: 'white', '&:hover': { opacity: 0.85 }, display: 'inline-block' }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.4,
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              }}
            >
              TORONTO PAVILION <br />
              190 RAILSIDE RD, NORTH YORK, ON M3A 1A3
            </Typography>
          </MuiLink>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1.5,
            }}
          >
            {[
              `Date: ${EVENT_INFO.date}`,
              `Starts: ${EVENT_INFO.timing.eventStart}`,
              'Tickets: CAD $100',
            ].map((fact) => (
              <Box
                key={fact}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.35)',
                  backgroundColor: 'rgba(0,0,0,0.32)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '0.78rem', md: '0.9rem' },
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}
                >
                  {fact}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 4,
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Button
              component="a"
              href={EVENT_INFO.ticketUrl}
              sx={{
                ...homeButtonPrimaryOnDarkSx,
              }}
            >
              Get Tickets
            </Button>
            <Button
              component="a"
              href="/gallery"
              variant="outlined"
              sx={{
                ...homeButtonSecondaryOnDarkSx,
              }}
            >
              View Gallery
            </Button>
          </Box>

          <Box
            sx={{
              mt: 2.5,
              display: 'inline-flex',
              gap: 2,
              px: { xs: 2, sm: 2.5 },
              py: 1.2,
              borderRadius: '12px',
              backgroundColor: 'rgba(17, 24, 39, 0.55)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Countdown to event start"
          >
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
            ].map((item) => (
              <Box key={item.label} sx={{ minWidth: 58 }}>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.15rem', md: '1.3rem' }, lineHeight: 1 }}>
                  {String(item.value).padStart(2, '0')}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <MuiLink href="/#about" underline="hover" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
              About
            </MuiLink>
            <MuiLink href="/#featuring" underline="hover" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
              Artists
            </MuiLink>
            <MuiLink href="/#faq" underline="hover" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
              FAQs
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
