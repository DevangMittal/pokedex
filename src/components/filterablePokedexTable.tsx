'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Paper, CircularProgress, Button } from '@mui/material';
import { PokemonTypeSelection } from '@/components/pokemonTypeSelection';
import { PokedexTable } from '@/components/pokedexTable';
import { api } from '@/utils/api';

// Define the Pokemon type
type Pokemon = {
    id: number;
    name: string;
    types: string[];
    sprite: string;
};

export const FilterablePokedexTable = () => {
    const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
    const [cursor, setCursor] = useState<number | undefined>(undefined);
    const [accumulatedPokemons, setAccumulatedPokemons] = useState<Pokemon[]>([]);

    const { data, isLoading, isFetching } = api.pokemon.getAll.useQuery({
        type: selectedType,
        limit: 2,
        cursor: cursor
    });

    // Handle data updates
    useEffect(() => {
        if (data?.items) {
            if (cursor === undefined) {
                setAccumulatedPokemons(data.items);
            } else {
                setAccumulatedPokemons(prev => [...prev, ...data.items]);
            }
        }
    }, [data, cursor]);

    const handleLoadMore = () => {
        if (data?.nextCursor) {
            setCursor(data.nextCursor);
        }
    };

    return (
        <Container maxWidth="md">
            <Paper sx={{ p: 3, mt: 4 }}>
                <Box mb={3}>
                    <PokemonTypeSelection
                        selectedType={selectedType}
                        selectType={(type) => {
                            setSelectedType(type);
                            setCursor(undefined);
                            setAccumulatedPokemons([]);
                        }}
                    />
                </Box>
                {isLoading && accumulatedPokemons.length === 0 ? (
                    <Box display="flex" justifyContent="center" p={4}>
                        <CircularProgress />
                    </Box>
                ) : accumulatedPokemons.length > 0 ? (
                    <>
                        <PokedexTable pokemons={accumulatedPokemons} />
                        {data?.nextCursor && (
                            <Box display="flex" justifyContent="center" mt={3}>
                                <Button
                                    variant="contained"
                                    onClick={handleLoadMore}
                                    disabled={isFetching}
                                >
                                    {isFetching ? 'Loading...' : 'Load More'}
                                </Button>
                            </Box>
                        )}
                    </>
                ) : null}
            </Paper>
        </Container>
    );
};