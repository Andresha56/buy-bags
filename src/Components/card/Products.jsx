import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./ProductCard";
import { Box, Container, Grid, Typography } from "@mui/material";

function Products() {
  const [productsData, setProductsData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get/products"
      );
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Box sx={{ margin: "4rem 0" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "1rem",
            margin: "auto",
            width: "60%",
            textAlign: "center",
          }}
        >
          The Louis Vuitton woman is more about a quality - a quality within
          some women that needs to come forward, to be noticed and recognised.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {productsData.map((data, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index} 
            >
              <Card data={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;
