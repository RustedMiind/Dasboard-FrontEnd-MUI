import "./App.scss";
import Layout from "./Layout/Layout";
import { blueGrey, grey, cyan, deepPurple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    background: {
      paper: grey[300],
      default: grey[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
        {/* <Test /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
