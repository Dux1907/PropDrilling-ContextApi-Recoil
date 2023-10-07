import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { atom, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";

const App = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  }
  return (
    <>
    <RecoilRoot>
      <h1 style={{ textAlign: "center" }}>Counter App</h1>
      <Grid style={style} container spacing={2}>
        <Grid item xs={10} md={2}>
          <Increase />
        </Grid>
        <Grid item xs={10} md={2}>
          <CountComponent />
        </Grid>
        <Grid item xs={10} md={2}>
          <Decrease />
        </Grid>
      </Grid>
      </RecoilRoot>
      </>
  );
};

const Increase = () => {
  const setTitle = useSetRecoilState(countState);
  return (
    <Button variant="outlined" onClick={() => setTitle((X) => X + 1)}>
      Increase Counter
    </Button>
  );
};

const Decrease = () => {
  const setTitle = useSetRecoilState(countState);
  return (
    <Button variant="outlined" onClick={() => setTitle((X) => X - 1)}>
      Decrease Counter
    </Button>
  );
};

const CountComponent = () => {
   const count = useRecoilValue(countState);
  return (
    <TextField
      id="outlined-basic"
      label="Counter"
      variant="outlined"
      value={count}
    />
 
  );
};
const countState = atom({
  key: "countState",
  default: 0,
});
export default App;
