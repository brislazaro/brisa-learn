import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import List from "./List/List";

const theme = createTheme({
  palette: {
    primary: {
      main: "#af7eea",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="header">
          <h1>Reminders</h1>
        </div>
        <List />
      </div>
    </ThemeProvider>
  );
}

export default App;
