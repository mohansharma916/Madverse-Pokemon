import { Box, Container, Skeleton, Typography } from "@mui/material";
import React from "react";

export default function Load() {
  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          color="white"
          marginBottom="10px"
        >
          Loading Pokemons...
        </Typography>
      </Box>
      <Skeleton
        variant="rounded"
        width="100%"
        height={200}
        sx={{ marginBottom: "2em" }}
        animation="wave"
      />
    </Container>
  );
}
