'use client';

import { useState } from 'react';
import { Box, Container, TextField, Paper, CircularProgress } from '@mui/material';
import { PokemonRow } from '@/components/pokemonRow';
import { api } from '@/utils/api';

export default function SinglePokemon() {
    const [pokemonName, setPokemonName] = useState('');
    const { data: pokemon, isLoading } = api.pokemon.getByName.useQuery(pokemonName, {
        enabled: pokemonName.length > 0,
    });

    return (
        <Container maxWidth="md">
            <Paper sx={{ p: 3, mt: 4 }}>
                <Box mb={3}>
                    <TextField
                        fullWidth
                        label="Pokemon Name"
                        value={pokemonName}
                        onChange={(e) => setPokemonName(e.target.value)}
                    />
                </Box>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" p={4}>
                        <CircularProgress />
                    </Box>
                ) : pokemon ? (
                    <PokemonRow {...pokemon} />
                ) : null}
            </Paper>
        </Container>
    );
}