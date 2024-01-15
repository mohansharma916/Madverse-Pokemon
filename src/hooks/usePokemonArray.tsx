// usePokemonData.ts
import { useEffect } from "react";
import { trpc } from "@/utils/trpc";

interface UsePokemonDataProps {
  array: string[];
  selectedType: string[];
}

export function usePokemonArray({ array, selectedType }: UsePokemonDataProps) {
  const { data, isLoading: arrayLoading } = trpc.getPokemonArray.useQuery({
    array: array,
    filter: selectedType,
  });

  return { data, arrayLoading };
}
