'use client';

import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

export const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        { path: '/part1', label: 'Single Pokemon' },
        { path: '/part2', label: 'Multiple Pokemon' },
        { path: '/part3', label: 'Filterable Table' },
    ];

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {routes.map((route) => (
                        <Button
                            key={route.path}
                            color="inherit"
                            onClick={() => router.push(route.path)}
                            sx={{
                                textDecoration: pathname === route.path ? 'underline' : 'none',
                            }}
                        >
                            {route.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};