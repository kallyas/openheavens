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

const Header = () => {
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

  const announcementText = "Join us for Mama Concert 2026 - Tickets at CAD $100! Experience massive worship on November 21st. Get your ticket now!";

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
                    src="/images/logo/concert.png" // Temporary placeholder or use text
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
                    Join us for Mama Concert 2026 - Tickets at CAD $100! Experience massive worship on November 21st. Get your ticket now!
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
            width: { xs: '85%', sm: '400px' },
            maxWidth: '400px',
            backgroundColor: '#fff',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 3,
              borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Logo Text */}
            <Link
              href="/"
              style={{ textDecoration: 'none', display: 'block' }}
              onClick={toggleMobileMenu}
            >
              <Box>
                <Typography
                  component="div"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #60a5fa 50%, #1e40af 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  MAMA
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    background: 'linear-gradient(90deg, #1e40af 0%, #6b21a8 33%, #3b82f6 66%, #1e3a8a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  CONCERT
                </Typography>
              </Box>
            </Link>

            {/* Close Button with Hamburger Animation */}
            <Box
              onClick={toggleMobileMenu}
              sx={{
                cursor: 'pointer',
                height: '48px',
                width: '48px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              <div
                className="hamburger-react"
                aria-label="Hide menu"
                aria-expanded="true"
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
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '12px',
                    position: 'absolute',
                    width: '12px',
                    top: '16px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    transform: 'translate(2.3664px, 3.5989px) rotate(45deg)',
                  }}
                ></div>
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '50%',
                    position: 'absolute',
                    width: '12px',
                    top: '16px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    transform: 'translate(-2.3664px, 3.5989px) rotate(-45deg)',
                  }}
                ></div>
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '12px',
                    position: 'absolute',
                    width: '12px',
                    top: '23px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    opacity: 0,
                    transform: 'translate(-6.1625px, 0px)',
                  }}
                ></div>
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '50%',
                    position: 'absolute',
                    width: '12px',
                    top: '23px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    opacity: 0,
                    transform: 'translate(6.1625px, 0px)',
                  }}
                ></div>
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '12px',
                    position: 'absolute',
                    width: '12px',
                    top: '30px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    transform: 'translate(2.3664px, -3.5989px) rotate(-45deg)',
                  }}
                ></div>
                <div
                  style={{
                    background: 'rgb(0, 0, 0)',
                    height: '2px',
                    left: '50%',
                    position: 'absolute',
                    width: '12px',
                    top: '30px',
                    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
                    transform: 'translate(-2.3664px, -3.5989px) rotate(45deg)',
                  }}
                ></div>
              </div>
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Box
                component="li"
                key={link.id}
                sx={{
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                {link.external ? (
                  <Box
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMobileMenu}
                    sx={{
                      display: 'block',
                      px: 4,
                      py: 2.5,
                      textDecoration: 'none',
                      color: '#000',
                      fontSize: '1.1rem',
                      fontFamily: 'Nexa Bold, sans-serif',
                      fontWeight: 700,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        paddingLeft: '36px',
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                ) : (
                  <Link
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                    onClick={toggleMobileMenu}
                  >
                    <Box
                      sx={{
                        display: 'block',
                        px: 4,
                        py: 2.5,
                        color: '#000',
                        fontSize: '1.1rem',
                        fontFamily: 'Nexa Bold, sans-serif',
                        fontWeight: 700,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          paddingLeft: '36px',
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                )}
              </Box>
            ))}
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              px: 4,
              py: 3,
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
            }}
          >
            <Box
              component="li"
              sx={{
                listStyle: 'none',
                mb: 3,
              }}
            >
              <Box
                component="a"
                href="mailto:info@mamaconcert.com"
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#666',
                  },
                }}
              >
                Contact Us
              </Box>
            </Box>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 3,
              }}
            >
              <IconButton
                component="a"
                href="https://instagram.com/victoryintchurchcanada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: '#000',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com/mamaconcert"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                sx={{
                  color: '#000',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </IconButton>
            </Box>

            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontSize: '0.875rem',
                fontWeight: 400,
              }}
            >
              Copyright © 2026 MAMA CONCERT
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
