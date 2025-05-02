'use client';

import { Alert, Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';

export function ErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    window.onerror = (message) => {
      setError(new Error(String(message)));
    };
  }, []);

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert 
          severity="error" 
          action={
            <Button color="inherit" size="small" onClick={() => window.location.reload()}>
              Retry
            </Button>
          }
        >
          Something went wrong: {error.message}
        </Alert>
      </Box>
    );
  }

  return <>{children}</>;
}
