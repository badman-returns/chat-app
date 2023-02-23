import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit';
import ContactCard from './ContactCard/ContactCard';

export default function BaseContactComponent() {
    return (
        <Fragment>
            <Stack direction='column' gap={2}>
                <Box display='flex' justifyContent='space-between' paddingTop='1rem' paddingLeft='2rem' paddingBottom='1rem'>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>Messages</Typography>
                    </Box>
                    <Box paddingRight='2rem'>
                        <EditIcon sx={{ color: '#268d61' }} />
                    </Box>
                </Box>
                <Box>
                    <Stack direction='column'>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard/>
                        <ContactCard />
                        <ContactCard/>
                        <ContactCard/>
                       
                    </Stack>
                </Box>
            </Stack>
        </Fragment>
    )
}