import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function Card({ data }) {
  console.log(data)
  return (
    <Box
        sx={{
          backgroundColor: "#f2f3f4",
          borderRadius: "10px",
          boxSizing: "border-box",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 0px -3px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
      >
          <Link to="product/details/1">
          <CardMedia
            sx={{ backgroundColor: "rgba(63, 55, 52, 0.06)" }}
            component="img"
            height="auto"
            image={data.image}
            alt="Paella dish"
          />
          <Box
            sx={{
              padding: "1rem 2rem 3rem 2rem",
              backgroundColor: "#f2f3f4",
              borderRadius: "0 0 10px 10px",
            }}
          >
            <Typography sx={{ fontFamily: "var(--font)" }}>
              {data.productName}
            </Typography>
            <Typography sx={{ fontFamily: "var(--font)" }}>
              {data.price}
            </Typography>
          </Box>
        </Link>
      </Box>
  );
}

export default Card;
