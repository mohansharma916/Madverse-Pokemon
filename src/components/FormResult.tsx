import React from "react";
import PokemonRow from "./PokemonRow";
import { Box, Typography } from "@mui/material";
import TableLayout from "./table/Container";

export default function FormResult({ pokemonData, error }: any) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {pokemonData ? (
        <TableLayout>
          <PokemonRow pokemon={pokemonData} />
        </TableLayout>
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
          Check Spellling, Pokemon Not Found
        </Typography>
      )}
    </Box>
  );
}
