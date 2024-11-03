import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";

function TermsPrivacyTerms() {
  return (
    <Box
      id="privacy-terms"
      sx={{
        width: "100%",
        minHeight: "50%",
        display: "flex",
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
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
            PROTECTION DE LA VIE PRIVEE
          </Typography>
        </h2>
      </Container>
    </Box>
  );
}

export default TermsPrivacyTerms;
