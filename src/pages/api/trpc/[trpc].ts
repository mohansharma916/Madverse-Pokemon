import { createTRPCContext } from "@/server/context";
import { pokemonRouter } from "@/server/routers/pokemon.router";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: pokemonRouter,
  createContext: createTRPCContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },
  batching: {
    enabled: true,
  },
});
