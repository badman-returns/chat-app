import { Avatar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IContact } from '../../../interface/contact'
import { appendChats, fetchChat } from '../../../store/slices/chats'
import { getLatestMessage } from '../../../store/slices/contacts'

export default function ContactCard({ id, name, picture, lastChat, latest_timestamp, isLatest }: IContact) {
    const dispatch = useDispatch();

    async function getChatById() {
        if (isLatest) {
            const contactId = id - 2;
            await dispatch(fetchChat(id));
            await dispatch(getLatestMessage({id: contactId, isLatest: false}))
            await dispatch(appendChats({
                text: lastChat,
                timestamp: new Date().toLocaleTimeString(),
                message_id: Math.floor(Math.random() * 10),
                type: "recieved"
            }));
        } else {
            dispatch(fetchChat(id));
        }
    }

    return (
        <Fragment>
            <Box onClick={getChatById} display='flex' justifyContent='space-between' alignItems='center' padding='1rem' sx={{ "&:hover": { background: '#35373b', transition: '0.5s', cursor: 'pointer' } }}>
                <Box>
                    <Stack direction='row' gap={1}>
                        <Avatar src={picture} />
                        <Box>
                            <Stack direction='column'>
                                <Typography variant='body1' sx={{ fontWeight: isLatest === true ? '800' : '500', color: isLatest === true ? '#fff' : '#a5a5a5', }}>{name}</Typography>
                                <Typography variant='body1' sx={{ fontWeight: isLatest === true ? '800' : '500', color: isLatest === true ? '#fff' : '#a5a5a5', }}>{lastChat}</Typography>
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