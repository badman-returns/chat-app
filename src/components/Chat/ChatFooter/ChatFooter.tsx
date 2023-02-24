import { Box, Button, Grid, Input, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Fragment, KeyboardEventHandler, useId, useRef, useState } from 'react';
import './ChatFooter.css';
import { useDispatch, useSelector } from 'react-redux';
import { appendChats, chatSelector, storeChats } from '../../../store/slices/chats';
import { IChats } from '../../../interface/chat';


export default function ChatFooter() {
    const [message, setMessage] = useState<string>("");
    const dispatch = useDispatch();

    function handleMessage(event: React.ChangeEvent<HTMLInputElement>) {
        const message = event.target.value;
        setMessage(message);
    }

    function handleKeyBoardEvent(event: React.KeyboardEvent<HTMLElement>) {
        if (event?.key !== "Enter") {
            return;
        }
        if (message == "") {
            return;
        }
        sendMessage();
    }
    
    function sendMessage(){
        setMessage("");
        const id = Math.floor(Math.random() * 10)
        const newMessage = {
            text: message,
            timestamp: new Date().toLocaleTimeString(),
            message_id: id,
            type: "sent"
        }
        dispatch(appendChats(newMessage));
    }


    return (
        <Fragment>
            <Grid container className='chat-footer-container'>
                <Grid item>
                    <Stack direction='row' gap={2}>
                        <Input value={message ? message : ""} fullWidth disableUnderline className='textbox' placeholder='Start typing message' onChange={handleMessage} onKeyDown={handleKeyBoardEvent} />
                        <Box display='flex' alignItems='center' justifyContent="flex-start">
                            <Button variant='text' sx={{ color: '#268d61' }} onClick={sendMessage}>
                                <SendIcon />
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Fragment>
    )
}