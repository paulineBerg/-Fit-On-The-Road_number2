import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Goodies from "@app/assets/images/goodies-shirts.jpg";

const tiers = [
  {
    title: "Pourquoi choisir FIT ON THE ROAD pour votre espace forme",
    description: [
      "Une expertise complète",
      "Des équipements haut de gamme",
      "Des bénéfices concrets pour votre entreprise",
      "Une flexibilité totale",
    ],
  },
  {
    title: "Nos offres pour offrir à vos collaborateurs un espace dédié",
    description: [
      "Conception et aménagement",
      "Equipement",
      "Des bénéfices concrets pour votre entreprise",
      "Une flexibilité totale",
    ],
  },
];

function EntrepriseSpaceCreation() {
  // #region SCROLLING FUNCTION
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  // #endregion

  return (
    <Container
      id="space-creation"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "80%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <h2>
          <Typography component="h2" variant="h2" color="text.primary">
            Un espace forme prêt à l&apos;emploi
          </Typography>
        </h2>
        <Typography variant="body1" color="text.secondary">
          {`pour plus dynamisme, nous sommes convaincus que
          l'investissement dans le bien-être de vos collaborateurs contribue à la réussite de votre entreprise.`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`En aménageant une salle de sport en entreprise, vous offrez à vos employés un lieu dédié à leur
          bien-être et à leur développement personnel.`}
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Entreprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                height: "100%",
                background:
                  tier.title === "Entreprise"
                    ? "linear-gradient(#690000, #410000)"
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: tier.title === "Entreprise" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    color: tier.title === "Entreprise" ? "grey.50" : undefined,
                  }}
                >
                  <h2>
                    <Typography
                      component="h3"
                      variant="h2"
                      height={tier.title === "Entreprise" ? "110.75px" : "72px"}
                    >
                      {typeof tier.price === "string" && tier.price}
                      {typeof tier.price !== "string" &&
                        tier.title === "Cours collectifs" &&
                        tier.price[collectiveCoachingPrice]}
                      {typeof tier.price !== "string" &&
                        tier.title === "Coaching privé" &&
                        tier.price[privateCoachingPrice]}
                    </Typography>
                  </h2>
                  <Typography component="h3" variant="h6">
                    {tier.title === "Coaching privé" && "la séance"}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: "grey.500",
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === "Entreprise"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      height="40px"
                      sx={{
                        color:
                          tier.title === "Entreprise" ? "grey.200" : undefined,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  component="a"
                  onClick={() => scrollToSection("contact")}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <box>
        <img
          src={Goodies}
          alt="Chemises Goodies"
          align="center"
          style={{ width: "100%" }}
        />
      </box>
    </Container>
  );
}

export default EntrepriseSpaceCreation;
