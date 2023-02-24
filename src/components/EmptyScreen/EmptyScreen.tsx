import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'

export default function EmptyScreen() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Grid item>
        <Stack direction="column" gap={1} alignItems="center">
          <Typography variant="h3" sx={{color:"#268d61"}}>Welcome to Gvine Chat</Typography>
          <Typography variant="subtitle1">Send and recieve messages without any opening your phone.</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
