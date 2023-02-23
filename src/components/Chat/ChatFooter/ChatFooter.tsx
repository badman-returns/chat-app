import { Box, Grid, Input, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Fragment } from 'react';
import './ChatFooter.css';


export default function ChatFooter() {
    return (
        <Fragment>
            <Grid container className='chat-footer-container'>
                <Grid item>
                    <Stack direction='row' gap={2}>
                        <Input fullWidth disableUnderline className='textbox' placeholder='Start typing message' />
                        <Box display='flex' alignItems='center'>
                            <SendIcon sx={{color: 'orange'}}/>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Fragment>
    )
}