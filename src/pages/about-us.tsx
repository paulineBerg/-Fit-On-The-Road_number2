import React from "react";

import { alpha, Box, Container, Divider, Typography } from "@mui/material";
import LogoClic from "@app/modules/LogoClic";

function AboutUs() {
  return (
    <Box
      id="about-us"
      sx={{
        width: "100%",
        minHeight: "50%",
        display: "flex",
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Box id="top" />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ height: "100%" }} />
        <Box id="top" />
        <h2>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.4rem)",
              textAlign: "center",
              color: "primary.light",
            }}
          >
            ABOUT FIT ON THE ROAD
          </Typography>
        </h2>
        <Divider />
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Page en construction ! 😉
        </Typography>
        <Divider />
        <LogoClic />
      </Container>
    </Box>
  );
}

export default AboutUs;
