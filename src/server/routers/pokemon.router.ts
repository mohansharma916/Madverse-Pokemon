import { z } from "zod";
import { router, procedure } from "../trpc";
export const pokemonRouter = router({
  getPokemon: procedure.input(z.string()).query(async ({ input, ctx }) => {
    const pokemon = await ctx.prisma.pokemon.findUnique({
      where: {
        name: input,
      },
      include: {
        types: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!pokemon) {
      throw new Error("Pokemon Not Found");
    }

    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,

      sprite: pokemon.sprite,
    };
  }),

  getPokemonArray: procedure
    .input(
      z.object({
        array: z.array(z.string()),
        filter: z.array(z.string()).optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      // Fetch Pokémon data for the array of names
      const whereCondition = {
        name: {
          in: input.array, // Check if the name is in the input array
        },
      };

      if (input.filter && input.filter.length > 0) {
        // @ts-ignore
        whereCondition.types = {
          some: {
            name: {
              in: input.filter,
            },
          },
        };
      }

      const pokemonArray = await ctx.prisma.pokemon.findMany({
        where: whereCondition,
        include: {
          types: {
            select: {
              name: true,
            },
          },
        },
      });
      return pokemonArray;
    }),
  getPokemonTypes: procedure.query(async ({ ctx }) => {
    const pokemonTypes = await ctx.prisma.type.findMany({});

    return pokemonTypes;
  }),
});

export type AppRouter = typeof pokemonRouter;
