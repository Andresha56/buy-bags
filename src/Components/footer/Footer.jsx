import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container sx={{marginTop:"6rem"}}>
        <hr />
      <footer>
        <Box
          sx={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "space-between",
            padding:"2rem 0 5rem 0"
          }}
        >
          <Box>
            <Box  sx={{
            display: "flex",
            gap:1,
            marginBottom :"2rem",
            alignItems:"center"
            }}>
                <img src="./assets/footerImg.svg"  style={{height:"20px"}}alt="" />
                <a href="./">India</a>
            </Box>
            <Typography sx={{ fontSize: "13px", color: "#494F55" ,marginBottom :"2rem"}}>
              Full Name and Address of the Manufacturer
            </Typography>

            <Box>
              <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem" }}>
                Louis Vuitton Malletier SAS
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem" }}>
                2 Rue du Pont Neuf
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem" }}>
                75034 Paris CEDEX 01
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem" }}>
                Please refer to the product label for specific country of origin
                for each product.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem"  }}>
              Full Name and Address of the Importer
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem"  }}>
              Louis Vuitton India Retail Private Limited
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem"  }}>
              901A Ninth Floor, Time Tower, MG Road
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#494F55",marginBottom :"0.5rem"  }}>
              Gurgaon, Haryana - 122002
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "#494F55" ,marginRight:"2rem" }}>
              Sitemap
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#494F55" }}>
              Legal & Privacy
            </Typography>
          </Box>
        </Box>
        <Typography sx={{textAlign:"center"}}>LOUIS VUITTON</Typography>
      </footer>
    </Container>
  );
}

export default Footer;
