'use client';

import React from 'react';
import { Box } from '@mui/material';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  reverse?: boolean;
  separator?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 'normal',
  className,
  reverse = false,
  separator = true,
}) => {
  const speedDurations = {
    slow: '1000s',
    normal: '30s',
    fast: '20s',
  };

  // Convert children to array
  const childrenArray = React.Children.toArray(children);

  // Create multiple copies for truly seamless scrolling
  const repeatedChildren = Array(20).fill(childrenArray).flat();

  return (
    <Box
      className={className}
      sx={{
        overflow: 'hidden',
        userSelect: 'none',
        display: 'flex',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          animation: `marquee ${speedDurations[speed]} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          '@keyframes marquee': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        }}
      >
        {repeatedChildren.map((child, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {child}
            {separator && (
              <Box
                component="span"
                sx={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'currentColor',
                  borderRadius: '50%',
                  mx: 3,
                  flexShrink: 0,
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
