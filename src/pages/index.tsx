import Image from "next/image";
import { Inter } from "next/font/google";
import Form from "@/components/Form";
import { Container } from "@mui/material";
import ArrayForm from "@/components/ArrayForm";
import FilterablePokedexTable from "@/components/filter/FilterablePokedexTable";

export default function Home() {
  return (
    <Container>
      <Form />
      <FilterablePokedexTable />
    </Container>
  );
}
