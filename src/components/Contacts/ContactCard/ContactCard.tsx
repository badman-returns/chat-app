import { Avatar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { Fragment } from 'react'
import { IContact } from '../../../interface/contact'

export default function ContactCard({ name, picture, lastChat, latest_timestamp }: IContact) {
    return (
        <Fragment>
            <Box display='flex' justifyContent='space-between' alignItems='center' padding='1rem' sx={{ "&:hover": { background: '#35373b', transition: '0.5s', cursor: 'pointer' } }}>
                <Box>
                    <Stack direction='row' gap={1}>
                        <Avatar src={picture} />
                        <Box>
                            <Stack direction='column'>
                                <Typography variant='body2' sx={{ fontWeight: '500' }}>{name}</Typography>
                                <Typography variant='subtitle2' sx={{ color: '#a5a5a5' }}>{lastChat}</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography variant='subtitle2' sx={{ color: '#a5a5a5' }}>{latest_timestamp}</Typography>
                </Box>
            </Box>
        </Fragment>
    )
}