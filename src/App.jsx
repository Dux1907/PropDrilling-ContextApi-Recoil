import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import {Grid} from "@mui/material";
import { createContext, useContext, useState } from "react";

const countContext = createContext()
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
      <countContext.Provider value={{
        title: title,
        setTitle : setTitle
      }}>
      <h1 style={{ textAlign : 'center'}}>Counter App</h1>
    <Grid style={style} container spacing={2}>
      <Grid item xs = {10} md = {2}>
          <Increase title={title} setTitle={setTitle} />
      </Grid>
        <Grid item xs={10} md={2}>
          <TextField id="outlined-basic" label="Counter" variant="outlined" value={title}/> </Grid>
        <Grid item xs={10} md={2}>
          <Decrease title={title} setTitle={setTitle}/>
       </Grid>
        </Grid>
        </countContext.Provider>
      </>
  )
}

const Increase = () => {
  const {title,setTitle} = useContext(countContext)
  return (
    <Button variant="outlined" onClick={() => setTitle(title + 1)}>Increase Counter</Button>
  )
}

const Decrease = () => {
  const {title,setTitle} = useContext(countContext)
  return (
    <Button variant="outlined" onClick={() => setTitle(title - 1)}>Decrease Counter</Button>
  )
}

export default App