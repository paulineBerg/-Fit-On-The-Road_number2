import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import LogoCollection from "@app/modules/LogoCollection";
import { UserType } from "@app/types/types";
import Contact from "@shared/Contact";
import EnterpriseCollectiveCoaching from "@app/modules/EnterpriseCollectiveCoaching";
import EnterpriseTeamBuilding from "@app/modules/EnterpriseTeamBuilding";
import EnterpriseSpaceCreation from "@app/modules/EnterpriseSpaceCreation";
import Pricing from "@app/modules/Pricing";
import LogoClic from "@app/modules/LogoClic";

function Entreprises() {
  return (
    <Box
      id="faq"
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
            FIT ON THE ROAD, la salle de sport en entreprise
          </Typography>
        </h1>
        <LogoCollection />
        <Divider />
        <Box id="services" />
        <EnterpriseCollectiveCoaching />
        <EnterpriseTeamBuilding />
        <Box id="more" />
        <EnterpriseSpaceCreation />
        <Divider />
        <Box id="pricing" />
        <Pricing />
        <Divider />
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Prêt à transformer votre entreprise grâce au sport ? Contactez-nous
          dès maintenant pour une étude personnalisée de vos besoins.
        </Typography>
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <LogoClic />
      </Container>
    </Box>
  );
}

export default Entreprises;
