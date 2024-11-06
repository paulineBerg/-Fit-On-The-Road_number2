import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";

import { UserType } from "@app/types/types";
import Contact from "@shared/Contact";
import TermsGeneralTerms from "@app/modules/TermsGeneralTerms";
import TermsLegalTerms from "@app/modules/TermsLegalTerms";
import TermsPrivacyTerms from "@app/modules/TermsPrivacyTerms";
import LogoClic from "@app/modules/LogoClic";

function Terms() {
  return (
    <Box
      id="terms"
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
        <h1>
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.4rem)",
              textAlign: "center",
              color: "primary.light",
            }}
          >
            FIT ON THE ROAD OFFICIEL
          </Typography>
        </h1>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Page en construction ! 😉
        </Typography>
        <TermsPrivacyTerms />
        <TermsGeneralTerms />
        <TermsLegalTerms />
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <LogoClic />
      </Container>
    </Box>
  );
}

export default Terms;
