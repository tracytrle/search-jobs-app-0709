import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContainerApp from "./components/ContainerApp";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailJob from "./components/DetailJob";
import FLogin from "./components/FLogin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#535c68",
    },
    secondary: {
      main: "#2d3436",
    },
  },
});

function App() {
  return (
    <div>
      <SearchAppBar />
      <ContainerApp>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/jobs/:id" element={<DetailJob />}></Route>
            <Route path="/login" element={<FLogin />}></Route>
          </Routes>
        </ThemeProvider>
      </ContainerApp>
    </div>
  );
}

export default App;
