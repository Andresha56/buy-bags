import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f4",
        borderRadius: "10px",
        boxSizing: "border-box",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 0px -3px"
      }}
    >
      <a href="./">
        <CardMedia
        sx={{ backgroundColor: "rgba(63, 55, 52, 0.06)"}}
          component="img"
          height="auto"
          image={data.image}
          alt="Paella dish"
        />
        <Box sx={{ padding: "0 2rem 4rem 2rem", backgroundColor: "#f2f3f4",}}>
          <Typography>{data.productName}</Typography>
          <Typography>{data.price}</Typography>
        </Box>
      </a>
    </Box>
  );
}

export default Card;

