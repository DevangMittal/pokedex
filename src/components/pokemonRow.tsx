'use client';

import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import Image from 'next/image';

interface PokemonProps {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

export const PokemonRow = ({ id, name, types, sprite }: PokemonProps) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ position: 'relative', width: 96, height: 96 }}>
                    <Image 
                        src={sprite} 
                        alt={name}
                        fill
                        sizes="96px"
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Box>
                <Box>
                    <Typography variant="h6">#{id} {name}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        {types.map((type) => (
                            <Chip
                                key={type}
                                label={type}
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};