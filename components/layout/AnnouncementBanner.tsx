"use client";

import React from "react";
import { Box } from "@mui/material";
import { FaBullhorn } from "react-icons/fa";
import Marquee from "@/components/ui/Marquee";

const AnnouncementBanner = () => {
  const announcement =
    "Join us for Mama Concert 2026 - A ticket at CAD $100 ! The massive Experience worship on November 28th. Get your FREE ticket now!";

  const announcements = Array(10).fill(announcement);

  return (
    <Box sx={{
      background: 'linear-gradient(to right, #ca8a04, #eab308)', // accent-600 to accent-500
      color: '#111827', // gray-900
      py: 1.5,
    }}>
      <Marquee speed="normal">
        {announcements.map((text, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              whiteSpace: 'nowrap',
              fontWeight: 700,
              mr: 4
            }}
          >
            <FaBullhorn style={{ fontSize: '1.25rem', flexShrink: 0 }} />
            <span>{text}</span>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default AnnouncementBanner;
