import React, { useEffect } from "react";
import SearchAppBar from "./components/SearchAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContainerApp from "./components/ContainerApp";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

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
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </ThemeProvider>
      </ContainerApp>
    </div>
  );
}

export default App;
