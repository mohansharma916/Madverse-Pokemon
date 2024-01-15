import React from "react";
import { TableRow, TableCell, Chip, Avatar } from "@mui/material";
// import { PokemonOuputType } from "~/types";

// type Props = {
//   pokemon: PokemonOuputType;
// };

import Image from "next/image";

const PokemonRow = ({ pokemon }: any) => {
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
        {pokemon?.types.map((type: any) => (
          <Chip
            key={type.name}
            label={type.name}
            variant="outlined"
            sx={{ marginRight: "5px" }}
          />
        ))}
      </TableCell>
      <TableCell align="center">
        <Image
          src={pokemon?.sprite}
          alt={pokemon?.name}
          style={{ maxWidth: "50px" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
