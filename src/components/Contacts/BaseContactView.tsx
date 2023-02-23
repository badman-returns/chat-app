import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit';
import ContactCard from './ContactCard/ContactCard';
import { IContact } from '../../interface/contact';
import { contactSelector } from '../../store/slices/contacts';
import { useSelector } from 'react-redux';

export default function BaseContactView() {
    const { contacts } = useSelector(contactSelector);
    console.log(contacts);
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
                        {
                            contacts.map((contact: IContact) => {
                                const { id, name, picture, lastChat, latest_timestamp } = contact;
                                return <ContactCard key={id} name={name} picture={picture} lastChat={lastChat} latest_timestamp={latest_timestamp} />
                            })
                        }
                    </Stack>
                </Box>
            </Stack>
        </Fragment>
    )
}