import React from "react";
import { TableRow, TableCell, Chip, Avatar } from "@mui/material";
// import { PokemonOuputType } from "~/types";

// type Props = {
//   pokemon: PokemonOuputType;
// };

const PokemonRow = ({ pokemon }) => {
  return (
    <TableRow
      key={pokemon?.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {pokemon?.id}
      </TableCell>
      <TableCell align="center">{pokemon?.name}</TableCell>

      <TableCell align="center">
        {pokemon?.types.map((type) => (
          <Chip
            key={type.name}
            label={type.name}
            variant="outlined"
            sx={{ marginRight: "5px" }}
          />
        ))}
      </TableCell>
      <TableCell align="center">
        <img
          src={pokemon?.sprite}
          alt={pokemon?.name}
          style={{ maxWidth: "50px" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
