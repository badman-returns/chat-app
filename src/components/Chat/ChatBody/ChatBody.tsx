import { Grid } from '@mui/material';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChatLog } from '../../../interface/chat';
import './ChatBody.css';

interface IChatBody {
    id: number,
    chatlog: ChatLog[]
}

export default function ChatBody({ id, chatlog }: IChatBody) {
    const messageEnd = useRef<HTMLDivElement>(null);

    function scrollToBottom(behavior:any){
        messageEnd.current?.scrollIntoView({
            block: "end",
            inline: "nearest",
            behavior: behavior
        })
    }

    useEffect(() => {
        scrollToBottom("auto");
        
    }, [id]);

    useEffect(() => {
        scrollToBottom("smooth");
    }, [chatlog])

    return (
        <Fragment>
            <Grid className='chat-body-container' sx={{ overflowY: "auto" }}>
                {
                    chatlog.map((chat: ChatLog) => {
                        return (
                            <Grid key={chat.message_id + Math.random()} container display='flex' flexDirection='column' alignItems={chat.type === 'recieved' ? 'flex-start' : 'flex-end'} sx={{ marginBottom: "2rem" }}>
                                <Grid item className={chat.type == 'recieved' ? 'message-card recieved-text' : ' message-card sent-text'}>
                                    {chat.text}
                                </Grid>
                            </Grid>
                        )
                    })
                }
                <div ref={messageEnd}></div>
            </Grid>

        </Fragment>
    )
}