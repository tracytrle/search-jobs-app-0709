import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContainerApp from "./components/ContainerApp";
import HomePage from "./components/HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#2d3436",
    },
  },
});
function App() {
  return (
    <div>
      <ContainerApp>
        <ThemeProvider theme={theme}>
          <SearchAppBar />
          <HomePage />
        </ThemeProvider>
      </ContainerApp>
    </div>
  );
}

export default App;
