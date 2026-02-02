'use client';

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import ReactPlayer from 'react-player';

const ScriptureQuote = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundImage: 'url(/images/event-img/img1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Video Section */}
        <Box
          sx={{
            background: 'rgb(255, 255, 255)',
            border: '2px solid black',
            borderRadius: '4px',
            padding: '15px',
            maxWidth: '85%',
            width: '100%',
            margin: '70px auto 0px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            transform: 'rotate(-2deg)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '16/9',
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=L0ZhSMAzYr8'}
              width={'100%'}
              height={'100%'}
              playing={isPlaying}
              controls={true}
              light={'/images/event-img/img15.jpeg'}
              playIcon={
                <Box
                  sx={{
                    background: 'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
                    borderRadius: '64px',
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      borderStyle: 'solid',
                      borderWidth: '16px 0px 16px 26px',
                      borderColor: 'transparent transparent transparent white',
                      marginLeft: '7px',
                    }}
                  />
                </Box>
              }
              onPlay={handlePlay}
            />
          </Box>
        </Box>

        {/* Scripture Quote */}
        <Box
          sx={{
            marginTop: '40px',
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.8,
              maxWidth: '800px',
              mb: 2,
            }}
          >
            "
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: '#60a5fa',
              }}
            >
              The God of glory
            </Box>
            {' '}appeared to our father Abraham when he was in Mesopotamia, before he dwelt in Haran."
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#9CA3AF',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Acts 7:2
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ScriptureQuote;
