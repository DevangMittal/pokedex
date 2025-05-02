'use client';

import { useState } from 'react';
import { Box, Container, Paper, CircularProgress } from '@mui/material';
import { PokemonTypeSelection } from '@/components/pokemonTypeSelection';
import { PokedexTable } from '@/components/pokedexTable';
import { api } from '@/utils/api';

export const FilterablePokedexTable = () => {
    const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

    const { data: pokemons, isLoading } = api.pokemon.getByType.useQuery(selectedType);

    return (
        <Container maxWidth="md">
            <Paper sx={{ p: 3, mt: 4 }}>
                <Box mb={3}>
                    <PokemonTypeSelection
                        selectedType={selectedType}
                        selectType={setSelectedType}
                    />
                </Box>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" p={4}>
                        <CircularProgress />
                    </Box>
                ) : pokemons ? (
                    <PokedexTable pokemons={pokemons} />
                ) : null}
            </Paper>
        </Container>
    );
};