import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from "@mui/material";

const ProductList = () => {
  
  const products = [
    {
      name: "Product 1",
      description: "This is a great product.",
      price: 29.99,
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Product 2",
      description: "This is another fantastic product.",
      price: 49.99,
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Product 3",
      description: "You'll love this product.",
      price: 19.99,
      image: "https://via.placeholder.com/200",
      },
    {
      name: "Product 4",
      description: "This is a great product.",
      price: 29.99,
      image: "https://via.placeholder.com/200",
      },
      {
          name: "Product 5",
          description: "This is another fantastic product.",
          price: 49.99,
          image: "https://via.placeholder.com/200",
      },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index}>
            <Card style={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" style={{ marginTop: "10px" }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
