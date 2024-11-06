import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import qrcode from "@app/assets/images/qrcode-appli.jpg";
import application from "@app/assets/images/application.jpg";

const userTestimonials = [
  {
    avatar: (
      <img
        alt="web application"
        src={application}
        className="rounded object-cover md:w-[50%] w-[50%] object-top"
      />
    ),
    name: "WEB Application",
    occupation: "",
    testimonial: [
      "C'est simple ! Rendez-vous sur notre lien  pour consulter le planning des cours et vous inscrire en ligne",
      "Le nombre de places étant limité, nous vous conseillons de réserver votre place dès que possible. ",
      "Des cours adaptés à chacun pour garantir votre sécurité et votre bien-être, nous vous invitons à renseigner vos informations personnelles et vos éventuelles pathologies sur votre profil.",
      "Cela nous permettra de personnaliser les exercices et de vous proposer un programme adapté.",
    ],
  },
  {
    avatar: (
      <a
        href="https://previewer.adalo.com/cf9b2592-2210-4737-9e7b-1bae756959e4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="qrcode"
          src={qrcode}
          className="rounded object-cover md:w-[80%] w-[80%] object-top"
        />
      </a>
    ),
    name: "QRCODE",
    occupation: "Scannez-moi !",
    testimonial: [
      "Sinon, directement sur le web",
      "via",
      "Cliquez sur le qrcode",
    ],
  },
];

function PhoneApp() {
  return (
    <Container
      id="mobile-application"
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
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <h2>
          <Typography component="h3" variant="h3" color="primary.light">
            Votre web application mobile
          </Typography>
        </h2>
        <Typography component="h4" variant="h4" color="text.primary">
          {`Comment s'inscrire aux cours ?`}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial) => (
          <Grid
            item
            // xs={12}
            // sm={6}
            md={6}
            key={`testimonials-${testimonial.name}`}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <div className="flex flex-col md:flex-row gap-2">
                  {testimonial.avatar}
                  <div className="flex flex-col gap-2">
                    {testimonial.testimonial.map((sentence) => (
                      <Typography variant="body2" color="text.secondary">
                        {sentence}
                      </Typography>
                    ))}
                  </div>
                </div>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PhoneApp;
