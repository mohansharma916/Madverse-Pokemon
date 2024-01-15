import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { trpc } from "@/utils/trpc";

export function useForm() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const [debounced] = useDebouncedValue(pokemonName, 400);

  const {
    data: pokemonData,
    isLoading,
    error,
  } = trpc.getPokemon.useQuery(debounced);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleClean = () => {
    setPokemonName("");
  };

  const handleSubmit = () => {
    console.log("Saved");
  };

  return {
    pokemonName,
    debounced,
    pokemonData,
    isLoading,
    error,
    handleOnChange,
    handleClean,
    handleSubmit,
  };
}
