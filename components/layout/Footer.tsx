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
           {/* Logo Placeholder */}
           <Typography
                variant="h2"
                sx={{
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '3rem' }
                }}
            >
                MAMA CONCERT 2026
            </Typography>

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
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#f3f4f6',
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
                    <Link href="/share-OH" style={{ color: '#9ca3af', textDecoration: 'none' }}>Share This Event</Link>
                    <Link href="/#contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</Link>
                </Box>
            </Grid>

            {/* Resources */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
                    Mama Concert Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Get Involved</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Get Your Free Ticket</a>
                </Box>
            </Grid>

            {/* Social Media */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
                    Social Media
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Youtube</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Facebook</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Instagram</a>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <a href="#" style={{ color: 'white' }}><YouTubeIcon /></a>
                    <a href="#" style={{ color: 'white' }}><FacebookIcon /></a>
                    <a href="#" style={{ color: 'white' }}><InstagramIcon /></a>
                </Box>
            </Grid>
        </Grid>

        {/* Location Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase' }}>
                LOCATION
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
               Metro Toronto Convention Centre,<br />
                255 Front St W, Toronto, ON M5V 2W6
            </Typography>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Copyright © {new Date().getFullYear()} MAMA CONCERT 2026. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
