// // 

// "use client";

// import React from "react";
// import { Box, Typography, Container } from "@mui/material";

// const ScriptureQuote = () => {
//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 12 },
//         backgroundColor: "#f9fafb",
//       }}
//     >
//       <Container maxWidth="md">
//         <Box
//           sx={{
//             backgroundColor: "white",
//             borderRadius: 2,
//             p: { xs: 3, md: 5 },
//             boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//             textAlign: "center",
//           }}
//         >
//           {/* Heading */}
//           <Typography
//             sx={{
//               fontSize: { xs: "1.5rem", md: "2rem" },
//               fontWeight: 700,
//               color: "#111827",
//               mb: 3,
//             }}
//           >
//             God Speaks Through Worship
//           </Typography>

//           {/* Scripture */}
//           <Typography
//             component="p"
//             sx={{
//               fontSize: { xs: "1.05rem", md: "1.15rem" },
//               color: "#1f2937",
//               lineHeight: 1.9,
//               textAlign: "left",
//               mb: 4,
//             }}
//           >
//             Finally, my brethren, be strong in the Lord, and in the power of His
//             might. Put on the whole armour of God, that ye may be able to stand
//             against the wiles of the devil. For we wrestle not against flesh and
//             blood, but against principalities, against powers, against the rulers
//             of the darkness of this world, against spiritual wickedness in high
//             places. Wherefore take unto you the whole armour of God, that ye may
//             be able to withstand in the evil day, and having done all, to stand.
//             Stand therefore, having your loins girt about with truth, and having
//             on the breastplate of righteousness; and your feet shod with the
//             preparation of the gospel of peace; above all, taking the shield of
//             faith, wherewith ye shall be able to quench all the fiery darts of the
//             wicked. And take the helmet of salvation, and the sword of the Spirit,
//             which is the word of God: praying always with all prayer and
//             supplication in the Spirit, and watching thereunto with all
//             perseverance and supplication for all saints; and for me, that
//             utterance may be given unto me, that I may open my mouth boldly, to
//             make known the mystery of the gospel, for which I am an ambassador in
//             bonds: that therein I may speak boldly, as I ought to speak.
//           </Typography>

//           {/* Reference */}
//           <Typography
//             sx={{
//               fontSize: "1rem",
//               color: "#6b7280",
//               fontWeight: 600,
//               textAlign: "right",
//             }}
//           >
//             — Ephesians 6:10–20
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ScriptureQuote;
"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ScriptureQuoteBackground = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundImage: "url('/images/your-background.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)", // Semi-transparent for readability
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              color: "#111827",
              mb: 3,
            }}
          >
            God Speaks Through Worship
          </Typography>

          {/* Scripture */}
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              color: "#1f2937",
              lineHeight: 1.9,
              textAlign: "left",
              mb: 4,
            }}
          >
            Finally, my brethren, be strong in the Lord, and in the power of His
            might. Put on the whole armour of God, that ye may be able to stand
            against the wiles of the devil. For we wrestle not against flesh and
            blood, but against principalities, against powers, against the rulers
            of the darkness of this world, against spiritual wickedness in high
            places. Wherefore take unto you the whole armour of God, that ye may
            be able to withstand in the evil day, and having done all, to stand.
            Stand therefore, having your loins girt about with truth, and having
            on the breastplate of righteousness; and your feet shod with the
            preparation of the gospel of peace; above all, taking the shield of
            faith, wherewith ye shall be able to quench all the fiery darts of the
            wicked. And take the helmet of salvation, and the sword of the Spirit,
            which is the word of God: praying always with all prayer and
            supplication in the Spirit, and watching thereunto with all
            perseverance and supplication for all saints; and for me, that
            utterance may be given unto me, that I may open my mouth boldly, to
            make known the mystery of the gospel, for which I am an ambassador in
            bonds: that therein I may speak boldly, as I ought to speak.
          </Typography>

          {/* Reference */}
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#6b7280",
              fontWeight: 600,
              textAlign: "right",
            }}
          >
            — Ephesians 6:10–20
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ScriptureQuoteBackground;
