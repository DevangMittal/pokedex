'use client';

import { Box } from '@mui/material';
import { PokemonRow } from '@/components/pokemonRow';

interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

interface PokedexTableProps {
    pokemons: Pokemon[];
}

export const PokedexTable = ({ pokemons }: PokedexTableProps) => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {pokemons.map((pokemon) => (
                <PokemonRow key={pokemon.id} {...pokemon} />
            ))}
        </Box>
    );
};