'use client';

import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as any;

const ScriptureQuote = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f9fafb',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Rotated Video Card */}
        <Box
          sx={{
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '4px',
            padding: '15px',
            maxWidth: '85%',
            width: '100%',
            margin: '70px auto 0',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            transform: 'rotate(-2deg)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'rotate(0deg)',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=L0ZhSMAzYr8"
                width="100%"
                height="100%"
                playing={playing}
                controls
                light="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
                onClickPreview={() => setPlaying(true)}
              />
            </Box>
          </Box>
        </Box>

        {/* Scripture Quote */}
        <Box
          sx={{
            mt: 5,
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            component="blockquote"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.75rem', lg: '2rem' },
              color: '#1f2937',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
              mb: 2,
              fontWeight: 400,
            }}
          >
            &ldquo;
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: '#111827',
              }}
            >
              God Speaks through Worship
            </Box>{' '}
            Finally, my brethren, be strong in the Lord, and in the power of his might.
           Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.
            For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places. Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand. Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness; and your feet shod with the preparation of the gospel of peace; above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked; and take the helmet of salvation, and the sword of the Spirit, which is the word of God: praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints; and for me, that utterance may be given unto me, that I may open my mouth boldly, to make known the mystery of the gospel, for which I am an ambassador in bonds: that therein I may speak boldly, as I ought to speak.

          </Typography>
          <Typography
            component="cite"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#6b7280',
              fontWeight: 600,
              fontStyle: 'normal',
            }}
          >
            Ephesians 6:10-20
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ScriptureQuote;
