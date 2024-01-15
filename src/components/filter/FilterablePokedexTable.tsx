// FilterablePokedexTable.tsx
import React, { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "../table/PokedexTable";

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string[]>([]);

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      <PokedexTable selectedType={selectedType} />
    </div>
  );
};

export default FilterablePokedexTable;
