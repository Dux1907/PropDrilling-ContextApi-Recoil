import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import {Grid} from "@mui/material";
import { useState } from "react";
const App = () => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign : 'center'
  }
  const [title, setTitle] = useState(0)
  return (
    <>
      <h1 style={{ textAlign : 'center'}}>Counter App</h1>
    <Grid style={style} container spacing={2}>
      <Grid item xs = {10} md = {2}>
      <Button variant="outlined" onClick = {() => setTitle(title + 1)}>Increase Counter</Button>
      </Grid>
        <Grid item xs={10} md={2}>
          <TextField id="outlined-basic" label="Counter" variant="outlined" value={title}/> </Grid>
      <Grid item xs = {10} md = {2}>
      <Button variant="outlined" onClick = { () => setTitle(title - 1)}>Decrease Counter</Button> </Grid>
      </Grid>
      </>
  )
}
 
export default App