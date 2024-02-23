import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import List from "./List/List";
import { Toaster } from "react-hot-toast";

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
      <main className="container">
        <header className="header">
          <h1>Reminders</h1>
        </header>

        <List />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
