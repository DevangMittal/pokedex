import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pokemonData = [
    {
        name: "Bulbasaur",
        types: ["grass", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        name: "Charmander",
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        name: "Squirtle",
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        name: "Pikachu",
        types: ["electric"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    // Add more Pokemon as needed
];

async function main() {
    for (const pokemon of pokemonData) {
        await prisma.pokemon.create({
            data: pokemon
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });