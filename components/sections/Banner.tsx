'use client';

import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { EVENT_INFO } from '@/lib/constants';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // Format the date
  const eventDate = new Date(EVENT_INFO.date);
  const dayName = eventDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const monthName = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const dayNumber = eventDate.getDate();
  const ordinalSuffix = (n: number) => {
    const s = ['TH', 'ST', 'ND', 'RD'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1f89e9',
        color: 'white',
        zIndex: 1000,
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 2.5 },
          maxWidth: '1400px',
          mx: 'auto',
          gap: { xs: 2, md: 3 },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            color: 'white',
            position: { xs: 'absolute', md: 'relative' },
            top: { xs: 8, md: 'auto' },
            right: { xs: 8, md: 'auto' },
            order: { xs: 3, md: 0 },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Event Info */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'left', md: 'left' },
            order: { xs: 1, md: 1 },
            pr: { xs: 5, md: 0 },
          }}
        >
          {/* Date */}
          <Box
            component="h2"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              mb: 0.5,
              lineHeight: 1.2,
            }}
          >
            {dayName}, {monthName} {ordinalSuffix(dayNumber)}
          </Box>

          {/* Venue */}
          <Box
            component="p"
            sx={{
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              fontWeight: 500,
              opacity: 0.95,
              lineHeight: 1.4,
              m: 0,
            }}
          >
            {EVENT_INFO.venue.name.toUpperCase()}
            <br />
            {EVENT_INFO.venue.address.toUpperCase()}
          </Box>
        </Box>

        {/* CTA Button */}
        <Button
          href={EVENT_INFO.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: 'white',
            fontWeight: 800,
            fontSize: { xs: '0.9rem', md: '1rem' },
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            borderRadius: 0,
            whiteSpace: 'nowrap',
            order: { xs: 2, md: 2 },
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#1a1a1a',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
              transform: 'scale(1.02)',
            },
          }}
        >
          GET YOUR TICKET
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
