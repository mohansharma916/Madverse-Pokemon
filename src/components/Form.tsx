import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import Search from "./Search";
import FormResult from "./FormResult";
import { useForm } from "@/hooks/useForm";
const Form = () => {
  const {
    pokemonName,
    pokemonData,
    isLoading,
    error,
    handleOnChange,
    handleClean,
    handleSubmit,
  } = useForm();

  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
          PokemonRow
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
        >
          <Search
            onChange={handleOnChange}
            onClean={handleClean}
            onSubmit={handleSubmit}
            value={pokemonName}
          />
        </Box>
        <Divider sx={{ marginBottom: 6 }} />
        {isLoading ? (
          <CircularProgress
            style={{
              margin: "auto",
              display: "block",
            }}
          />
        ) : (
          <FormResult pokemonData={pokemonData} error={error?.message} />
        )}
      </Box>
    </>
  );
};
export default Form;
