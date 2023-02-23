import { Fragment } from 'react'
import { Grid } from '@mui/material'
import BaseChatComponent from './components/Chat/BaseChatComponent';
import './App.css';
import BaseContactComponent from './components/Contacts/BaseContactComponent';

function App() {
  return (
    <Fragment>
      <div className='navbar'>
        <h1>Gvine Chat</h1>
      </div>
      <Grid container className='app-container'>
        <Grid item lg={3} className='contact-container' sx={{overflowY: 'auto'}}>
          <BaseContactComponent/>
        </Grid>
        <Grid item lg={9} className='message-container'>
          <BaseChatComponent/>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default App
