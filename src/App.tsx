import "./App.scss";
import Layout from "./Layout/Layout";
import { blueGrey, grey, pink } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      paper: grey[100],
      default: grey[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
