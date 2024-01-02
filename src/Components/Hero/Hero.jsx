import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const images = [
  { id: 1, src: "./assets/image2.webp" },
  {
    id: 2,
    src: "./assets/image1.webp",
  },
  {
    id: 3,
    src: "./assets/image3.jpg",
  },
];

function Hero() {
  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
    >
      {images.map((img) => {
        return (
          <Box key={img.id} sx={{ height: "auto",minHeight:"300px"}}>
            <CardMedia
              component="img"
              image={img.src}
              alt="hand-bags"
              sx={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
        );
      })}
    </Carousel>
  );
}

export default Hero;
