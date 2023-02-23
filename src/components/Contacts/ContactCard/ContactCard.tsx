import { Avatar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { Fragment } from 'react'

export default function ContactCard() {
    return (
        <Fragment>
            <Box display='flex' justifyContent='space-between' alignItems='center' padding='1rem' sx={{"&:hover": {background: '#35373b', transition: '0.5s', cursor: 'pointer'}}}>
                <Box>
                    <Stack direction='row' gap={1}>
                        <Avatar />
                        <Box>
                            <Stack direction='column'>
                                <Typography variant='body2' sx={{ fontWeight: '500' }}>Dan Abhrmov</Typography>
                                <Typography variant='subtitle2' sx={{color: '#a5a5a5'}}>Some dummy messages ...</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography variant='subtitle2' sx={{color: '#a5a5a5'}}>4:30PM</Typography>
                </Box>
            </Box>
        </Fragment>
    )
}