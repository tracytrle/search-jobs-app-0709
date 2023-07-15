import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContainerApp from "./components/ContainerApp";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailJob from "./components/DetailJob";
import Login from "./components/pages/Login";
import AuthProvider from "./components/AuthComponents/AuthProvider";
import LoginModal from "./components/LoginModal";
import Home from "./components/pages/Home";

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
  // const location = useLocation();
  // const auth = useContext(AuthContext);
  // const state = location.state;
  return (
    <div>
      <AuthProvider>
        <SearchAppBar />
        <ContainerApp>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/jobs/:id" element={<DetailJob />}></Route>
              <Route path="/login" element={<Home />}></Route>
            </Routes>
          </ThemeProvider>
        </ContainerApp>
      </AuthProvider>
    </div>
  );
}

export default App;
