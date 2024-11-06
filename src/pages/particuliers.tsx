import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import Contact from "@shared/Contact";
import { UserType } from "@app/types/types";

import Pricing from "@app/modules/Pricing";
import PhoneApp from "@app/modules/PhoneApp";
import IndividualCollectiveCoaching from "@app/modules/IndividualCollectiveCoaching";
import IndividualPrivateCoaching from "@app/modules/IndividualPrivateCoaching";
import IndividualEvent from "@app/modules/IndividualEvent";
import Testimonials from "@app/modules/Testimonials";
import Video from "@app/modules/landing/Video";
import LogoClic from "@app/modules/LogoClic";

function Particuliers() {
  return (
    <Box
      id="particular"
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
          gap: 4,
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
            FIT ON THE ROAD, la salle de sport qui vient à toi.
          </Typography>
        </h1>
        <Divider />
        <Video />
        <Box id="services" />
        <IndividualCollectiveCoaching />
        <IndividualPrivateCoaching />
        <IndividualEvent />
        <Divider />
        <Box id="pricing" />
        <Pricing />
        <Divider />
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Comme une envie de sport ! 😉
        </Typography>
        <Divider />
        <Box id="more" />
        <PhoneApp />
        <Testimonials />
        <Contact defaultUserType={UserType.INDIVIDUAL} />
        <LogoClic />
      </Container>
    </Box>
  );
}

export default Particuliers;
