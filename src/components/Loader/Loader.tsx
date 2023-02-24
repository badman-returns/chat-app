import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';


export default function Loader() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Stack direction="column" gap={1} alignItems="center">
        <Typography variant='h3'>Gvine Chat</Typography>
        <CircularProgress color='success' />
      </Stack>
    </Grid>
  )
}

