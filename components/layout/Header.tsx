'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PiMegaphone } from "react-icons/pi";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_LINKS } from '@/lib/constants';

// Custom Hamburger Icon Component to match the rawhtml style
const HamburgerIcon = () => (
  <div
    className="hamburger-react"
    aria-label="Show menu"
    role="button"
    style={{
      cursor: 'pointer',
      height: '48px',
      position: 'relative',
      transition: '0.4s cubic-bezier(0, 0, 0, 1)',
      userSelect: 'none',
      width: '48px',
      outline: 'none',
    }}
  >
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '14px', position: 'absolute', width: '10px', top: '17px', transition: '0.4s cubic-bezier(0, 0, 0, 1)' }}></div>
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '50%', position: 'absolute', width: '10px', top: '17px', transition: '0.4s cubic-bezier(0, 0, 0, 1)' }}></div>
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '14px', position: 'absolute', width: '10px', top: '23px', transition: '0.4s cubic-bezier(0, 0, 0, 1)', opacity: 1 }}></div>
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '50%', position: 'absolute', width: '10px', top: '23px', transition: '0.4s cubic-bezier(0, 0, 0, 1)', opacity: 1 }}></div>
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '14px', position: 'absolute', width: '10px', top: '29px', transition: '0.4s cubic-bezier(0, 0, 0, 1)' }}></div>
    <div style={{ background: 'rgb(0, 0, 0)', height: '2px', left: '50%', position: 'absolute', width: '10px', top: '29px', transition: '0.4s cubic-bezier(0, 0, 0, 1)' }}></div>
  </div>
);

constHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const announcementText = "Join us for Mama Concert 2026 - A ticket at CAD $100 ! The massive Experience worship on November 28th. Get your ticket now!";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px' // Approximate height
          }}>

            {/* Logo - Left */}
            <Box sx={{ flexShrink: 0 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                {/* Use the logo image if available, else fallback to text but styled like the image container */}
                <Box sx={{
                  width: '97px',
                  height: '40px',
                  position: 'relative'
                }}>
                  <img
                    alt="Victory International Church "
                    width="97"
                    height="40"
                    style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                    src="/images/hero/mama-concert.png" // Temporary placeholder or use text
                    // In a real scenario, we'd use the actual logo asset. For now, let's use a text fallback if image fails or just text.
                    // But to match pixel perfect, I will try to simulate the layout.
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const nextSibling = img.nextElementSibling as HTMLElement | null;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      display: 'none', // Hidden by default, shown on error
                      color: '#000',
                      fontWeight: 900,
                      lineHeight: 1,
                      fontSize: '1.2rem'
                    }}
                  >
                    MAMA<br />CONCERT
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Center Content: Announcement + Megaphone */}
            <Box sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flex: 1,
              mx: 4,
              maxWidth: '600px',
              overflow: 'hidden',
              border: '1px solid #fff',
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(57, 57, 57, 0.20)',
              borderRadius: '30px',
              padding: '4px 12px'
            }}>
              <Box sx={{ padding: '10px 12px', display: 'flex', alignItems: 'center' }}>
                {/* Megaphone Icon */}
                <PiMegaphone
                  size={24}
                />
              </Box>

              <Box sx={{ borderLeft: '1px solid #fff', padding: '10px 12px', color: '#fff' }}>
                <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '500px', position: 'relative' }}>
                  <div className="scrolling-text">
                    Join us for Mama Concert 2026 - A ticket at CAD $100 ! The massive Experience worship on November 28th. Get your FREE ticket now!
                  </div>
                </Box>
              </Box>
            </Box>

            {/* Right: Hamburger */}
            <Box onClick={toggleMobileMenu} sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <HamburgerIcon />
            </Box>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: '#111827',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleMobileMenu}>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                MAMA CONCERT 2026
              </Typography>
            </Link>
            <IconButton onClick={toggleMobileMenu} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.id} disablePadding>
                {link.external ? (
                  <ListItemButton
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMobileMenu}
                    sx={{ py: 2 }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: 'white',
                      }}
                    />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    sx={{ py: 2 }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: 'white',
                      }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
