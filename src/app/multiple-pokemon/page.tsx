'use client';

import { useState } from 'react';
import { Box, Container, TextField, Paper } from '@mui/material';
import { PokedexTable } from '@/components/pokedexTable';
import { api } from '@/utils/api';

export default function MultiplePokemon() {
    const [pokemonNames, setPokemonNames] = useState('');
    const { data: pokemons } = api.pokemon.getByNames.useQuery(
        pokemonNames.split(',').map(name => name.trim()).filter(Boolean),
        {
            enabled: pokemonNames.length > 0,
        }
    );

    return (
        <Container maxWidth="md">
            <Paper sx={{ p: 3, mt: 4 }}>
                <Box mb={3}>
                    <TextField
                        fullWidth
                        label="Pokemon Names (comma-separated)"
                        value={pokemonNames}
                        onChange={(e) => setPokemonNames(e.target.value)}
                        helperText="Enter pokemon names separated by commas"
                    />
                </Box>
                {pokemons && <PokedexTable pokemons={pokemons} />}
            </Paper>
        </Container>
    );
}