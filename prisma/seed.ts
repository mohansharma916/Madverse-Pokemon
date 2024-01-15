// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pokemonData = [
    {
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      name: "Charmander",
      types: ["Fire"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      name: "Squirtle",
      types: ["Water"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
    {
      name: "Pikachu",
      types: ["Electric"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    },
    {
      name: "Gengar",
      types: ["Ghost", "Poison"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
    },
    {
      name: "Machop",
      types: ["Fighting"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png",
    },
    {
      name: "Geodude",
      types: ["Rock", "Ground"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
    },
    {
      name: "Eevee",
      types: ["Normal"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
    },
    {
      name: "Snorlax",
      types: ["Normal"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png",
    },
  ];

  const pokemonTypes = [
    {
      type: "Fire",
    },
    {
      type: "Water",
    },
    {
      type: "Electric",
    },
    {
      type: "Normal",
    },
    {
      type: "Rock",
    },
    {
      type: "Ground",
    },
    {
      type: "Fighting",
    },
    {
      type: "Ghost",
    },
    {
      type: "Poison",
    },
  ];

  for (const type of pokemonTypes) {
    const types = await prisma.type.create({
      data: { name: type.type },
    });
  }

  for (const data of pokemonData) {
    const types = await prisma.type.findMany({
      where: {
        name: {
          in: data.types,
        },
      },
    });

    await prisma.pokemon.create({
      data: {
        name: data.name,
        sprite: data.sprite,
        types: {
          connect: types.map((type) => ({
            id: type.id,
          })),
        },
      },
    });
  }

  console.log("Data seeded successfully");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
