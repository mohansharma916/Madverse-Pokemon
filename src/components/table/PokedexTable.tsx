// PokedexTable.tsx
import React from "react";
import { trpc } from "@/utils/trpc";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Chip, Avatar, Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Load from "../skeleton";
import TableLayout from "./Container";
import { usePokemonArray } from "@/hooks/usePokemonArray";
import Image from "next/image";

type PokedexTableProps = {
  selectedType: string[] | [];
};

const PokedexTable: React.FC<PokedexTableProps> = ({ selectedType }) => {
  const array = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Pikachu",
    "Jigglypuff",
    "Gengar",
    "Machop",
    "Geodude",
    "Eevee",
    "Snorlax",
  ];
  const { data, arrayLoading } = usePokemonArray({ array, selectedType });

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
        PokedexTable
      </Typography>
      {arrayLoading ? (
        <Load />
      ) : (
        <TableLayout>
          {data?.map((pok) => (
            <TableRow
              key={pok.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pok.id}
              </TableCell>
              <TableCell align="right">{pok.name}</TableCell>
              <TableCell align="right">
                {pok.types.map((type) => (
                  <Chip
                    key={type.name}
                    label={type.name}
                    variant="outlined"
                    sx={{ marginRight: "5px" }}
                  />
                ))}
              </TableCell>
              <TableCell align="right">
                <Image
                  src={pok.sprite}
                  alt={pok.name}
                  style={{ maxWidth: "50px" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableLayout>
      )}
    </>
  );
};

export default PokedexTable;
