import { Fragment, useState } from 'react'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit';
import ContactCard from './ContactCard/ContactCard';
import { IContact } from '../../interface/contact';
import { contactSelector } from '../../store/slices/contacts';
import { useSelector } from 'react-redux';
import './BaseContactView.css'

export default function BaseContactView() {
    const { contacts } = useSelector(contactSelector);
    const [activeItem, setActiveItem] = useState<Number>();

    function setContactStyleOnActive(id: number) {
        setActiveItem(id);
    }

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
                                return (
                                    <div onClick={() => setContactStyleOnActive(id)} className={id === activeItem ? "active" : ""}>
                                        <ContactCard key={id} id={id} name={name} picture={picture} lastChat={lastChat} latest_timestamp={latest_timestamp} />
                                    </div>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Stack>
        </Fragment>
    )
}