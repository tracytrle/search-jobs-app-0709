import * as React from "react";
import { useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

import AuthContext from "./AuthComponents/AuthContext";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function handleOnChange(event) {
    let value = event.target.value;
    setSearchValue(value);
  }

  const handleOpen = () => {
    navigate("/login");
  };

  const handleClose = () => {
    auth.logout(() => {
      navigate("/");
    });
  };

  // since styled("div") not "form", we cannot use onSubmit
  const handleKeyDown = (event) => {
    if (auth.user) {
      if (event.key === "Enter") {
        let value = event.target.value;
        setSearchValue(value);
        setSearchParams({ q: value });
        event.preventDefault();
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#3E3E3E",
          display: "flex",
          justifyContent: "center",
          paddingTop: "0px",
          paddingLeft: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={(event) => {
                handleOnChange(event);
              }}
              onKeyDown={handleKeyDown}
            />
          </Search>
          <Box>
            {auth?.user ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 2, right: 0, fontSize: "1rem", gap: "5px" }}
                  onClick={handleClose}
                >
                  <img src="../lock2.png" alt="" width="32px" height="32px" />{" "}
                  {auth?.user}
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 2, right: 0, fontSize: "1rem", gap: "5px" }}
                  onClick={handleClose}
                >
                  <img
                    src="../arrow-right-3781.svg"
                    alt=""
                    width="25px"
                    height="25px"
                  />{" "}
                  Logout
                </IconButton>
              </>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 2, right: 0, fontSize: "1rem", gap: "5px" }}
                onClick={handleOpen}
              >
                <img
                  src="../arrow-right-3781.svg"
                  alt=""
                  width="25px"
                  height="25px"
                />{" "}
                Login
              </IconButton>
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
