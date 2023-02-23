import { Fragment, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import BaseChatComponent from './components/Chat/BaseChatComponent';
import BaseContactView from './components/Contacts/BaseContactView';
import './App.css';

export default function BaseApp() {
    return (
        <Fragment>
            <div className='navbar'>
                <h1>Gvine Chat</h1>
            </div>
            <Grid container className='app-container'>
                <Grid item lg={3} className='contact-container' sx={{ overflowY: 'auto' }}>
                    <BaseContactView />
                </Grid>
                <Grid item lg={9} className='message-container'>
                    <BaseChatComponent />
                </Grid>
            </Grid>
        </Fragment>
    )
}


