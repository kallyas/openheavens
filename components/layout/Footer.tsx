'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import {
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import { EVENT_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        {/* Contact / Register Section */}
        <Box
          id="contact"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mb: 8,
          }}
        >
           {/* Logo */}
          <Box
            component="img"
            src="/images/logo/concert.png"
            alt="Mama Concert"
            sx={{
              width: { xs: '200px', sm: '300px', md: '400px' },
              height: 'auto',
              mb: 3,
            }}
          />

          <Typography sx={{ mb: 3, maxWidth: '600px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Register to get your ticket. <br />
            For any enquires including media and press contact us at{' '}
            <a href={`tel:${EVENT_INFO.contact.phone}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {EVENT_INFO.contact.phone}
            </a>{' '}
            or{' '}
            <a href={`mailto:${EVENT_INFO.contact.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {EVENT_INFO.contact.email}
            </a>
          </Typography>
          <Button
            component="a"
            href={EVENT_INFO.ticketUrl}
            data-testid="tf-v1-popup"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Register
          </Button>
        </Box>

        {/* Links Section */}
        <Grid container spacing={4} sx={{ mb: 8, justifyContent: 'space-between' }}>
            {/* More Info */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
                    More Info
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Link href="/#faq" style={{ color: '#9ca3af', textDecoration: 'none' }}>FAQs</Link>
                    <Link href="/share-MC" style={{ color: '#9ca3af', textDecoration: 'none' }}>Share This Event</Link>
                    <Link href="/#contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</Link>
                </Box>
            </Grid>

            {/* Resources */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
                    Mama Concert Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <a href="https://form.typeform.com/to/Ij072pJa?typeform-source=helicon-dinosaur-2nx4.squarespace.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>Get Involved</a>
                    <a href={EVENT_INFO.ticketUrl} style={{ color: '#9ca3af', textDecoration: 'none' }}>Get Your Ticket</a>
                </Box>
            </Grid>

            {/* Social Media */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
                    Social Media
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: '#9ca3af', textDecoration: 'none' }}>Youtube</a>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: '#9ca3af', textDecoration: 'none' }}>Facebook</a>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: '#9ca3af', textDecoration: 'none' }}>Instagram</a>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: 'white' }}><YouTubeIcon /></a>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: 'white' }}><FacebookIcon /></a>
                    <a href="https://www.youtube.com/channel/UC25q0tHU8ahS1R6fd3nUJXg" style={{ color: 'white' }}><InstagramIcon /></a>
                </Box>
            </Grid>
        </Grid>

        {/* Location Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase' }}>
                LOCATION
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
               Toronto Pavilion,<br />
               190 Railside Rd, North York, ON M3A 1A3
            </Typography>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Copyright © {new Date().getFullYear()} MAMA CONCERT TORONTO
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
