import { Grid } from '@mui/material';
import { Fragment } from 'react';
import './ChatBody.css';

export default function ChatBody() {
    const messages = [
        {
            text: 'Hi, how are you?',
            type: 'recieved'
        },
        {
            text: 'Hey, I am good, what about you?',
            type: 'sent'
        }
    ]
    return (
        <Fragment>
            <Grid className='chat-body-container'>
                {
                    messages.map((message) => {
                        return (
                            <Grid container display='flex' flexDirection='column' alignItems={message.type === 'recieved' ? 'flex-start' : 'flex-end'}>
                                <Grid item className={message.type == 'recieved' ? 'message-card recieved-text' : ' message-card sent-text'}>
                                    {message.text}
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Fragment>
    )
}