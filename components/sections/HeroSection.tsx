// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Box, Typography, Container, Link as MuiLink } from '@mui/material';
// import { EVENT_INFO } from '@/lib/constants';

// const HeroSection = () => {
//   const [playerReady, setPlayerReady] = useState(false);

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         backgroundColor: '#000',
//       }}
//     >
//       {/* Video Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           zIndex: 0,
//         }}
//       >
//         <video 
//           width="100%"
//           height="100%"
//           src="./images/event-img/video.mp4"
//           title="Mama Concert "
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             width: '100vw',
//             height: '100vh',
//             transform: 'translate(-50%, -50%)',
//             pointerEvents: 'none',
//             objectFit: 'cover',
//           }}
//         />
//         {/* Dark Overlay */}
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.3)',
//           }}
//         />
//       </Box>

//       {/* Main Content */}
//       <Container
//         maxWidth="lg"
//         disableGutters
//         sx={{
//           position: 'relative',
//           zIndex: 10,
//           textAlign: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//           px: 2,
//         }}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             {/* Logo Placeholder - matches rawhtml structure */}
//             <Box sx={{ mb: 4 }}>
//                  {/* Using text as placeholder for the logo image */}
//                 <Typography
//                     variant="h1"
//                     sx={{
//                     fontSize: { xs: '3rem', sm: '5rem', md: '7rem' },
//                     fontWeight: 900,
//                     color: 'white',
//                     textTransform: 'uppercase',
//                     letterSpacing: '-0.04em',
//                     lineHeight: 0.9,
//                     textShadow: '0 4px 20px rgba(0,0,0,0.5)',
//                     textAlign: 'center'
//                     }}
//                 >
//                     MAMA <br/>CONCERT
//                 </Typography>
//             </Box>

//             {/* Address Link */}
//             <Box>
//                 <MuiLink
//                 href={EVENT_INFO.venue.googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 underline="none"
//                 sx={{
//                     color: 'white',
//                     textAlign: 'center',
//                     display: 'block',
//                     '&:hover': { opacity: 0.8 }
//                 }}
//                 >
//                 <Typography
//                     variant="body1"
//                     sx={{
//                     fontWeight: 700,
//                     fontSize: { xs: '1rem', md: '1.25rem' },
//                     lineHeight: 1.4,
//                     textShadow: '0 2px 4px rgba(0,0,0,0.5)'
//                     }}
//                 >
//                     METRO CONVENTION CENTRE <br/>
//                     255 FRONT ST W, TORONTO, ON M5V 2W6
//                 </Typography>
//                 </MuiLink>
//             </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;
'use client';

import React from 'react';
import { Box, Typography, Container, Link as MuiLink } from '@mui/material';
import { EVENT_INFO } from '@/lib/constants';

const HeroSection = () => {
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '5rem', md: '7rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              textShadow: '0 4px 20px rgba(0,0,0,0.6)',
              mb: 4,
            }}
          >
            MAMA <br /> CONCERT
          </Typography>

          {/* Venue */}
          <MuiLink
            href={EVENT_INFO.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ color: 'white', '&:hover': { opacity: 0.85 } }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.4,
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              }}
            >
              METRO CONVENTION CENTRE <br />
              255 FRONT ST W, TORONTO, ON M5V 2W6
            </Typography>
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
