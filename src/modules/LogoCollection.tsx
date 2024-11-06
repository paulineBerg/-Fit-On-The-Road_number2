import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import atlantic from "@app/assets/images/companies/atlantic.png";
import s2sAuto from "@app/assets/images/companies/s2sAuto.png";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";

const logos = [
  {
    name: "S2S Auto",
    logo: s2sAuto,
  },
  {
    name: "E-module",
    logo: atlantic,
  },
  {
    name: "Groupe Atlantic",
    logo: atlantic,
  },
  {
    name: "Sodrexal Audit et Conseil",
    logo: null,
  },
];

const logoStyle = {
  margin: "0 32px",
  opacity: 0.7,
  filter: "grayscale(70%)",
};

function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <h2>
        <Typography
          component="h2"
          variant="subtitle2"
          align="center"
          color="text.secondary"
        >
          Ils nous font confiance
        </Typography>
      </h2>
      <div className="flex justify-evenly gap-4">
        {logos.map(({ logo, name }) => (
          <div className="flex flex-col gap-2 items-center justify-center w-[150px]">
            <div className="h-[80px] w-[100px] flex align-middle justify-center">
              {logo && (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="object-contain"
                  style={logoStyle}
                />
              )}
              {!logo && (
                <BusinessTwoToneIcon
                  sx={{
                    fontSize: "60px",
                    filter:
                      "invert(68%) hue-rotate(3deg) brightness(130%) contrast(106%)",
                  }}
                />
              )}
            </div>
            <Typography variant="caption" align="center">
              {name}
            </Typography>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default LogoCollection;
