'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface PokemonTypeSelectionProps {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
}

const POKEMON_TYPES = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

export const PokemonTypeSelection = ({ selectedType, selectType }: PokemonTypeSelectionProps) => {
    return (
        <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
                value={selectedType || ''}
                label="Type"
                onChange={(e) => selectType(e.target.value ? e.target.value : undefined)}
            >
                <MenuItem value="">All Types</MenuItem>
                {POKEMON_TYPES.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};