import {GlobalRouter} from "./routes/GlobalRouter.jsx";
import { GameContex } from "./PageContexts/PageContext";

//import {CssBaseline } from "@mui/material";

function App() {
  return (
   <>
    <GameContex>
      <GlobalRouter/>
    </GameContex>
    
  </>
  );
}

export default App;
