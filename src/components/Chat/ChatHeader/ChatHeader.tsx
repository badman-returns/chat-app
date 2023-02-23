import { Fragment } from 'react';
import { Avatar, Grid, Typography, Box } from '@mui/material';
import { Stack } from '@mui/system';
import './ChatHeader.css';

export default function ChatHeader() {
    return (
        <Fragment>
            <Grid container className='chat-header-container'>
                <Grid item >
                    <Stack direction='row' gap={2}>
                        <Avatar alt="Remy Sharp" />
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography variant='h6' sx={{fontWeight: '600'}}>Dan Abhrmov</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Fragment>
    )
}