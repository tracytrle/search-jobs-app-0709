import * as React from "react";
import { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import "./FLogin.js";
import Modal from "@mui/material/Modal";

import FLogin from "./FLogin.js";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");

  function handleOnChange(event) {
    let value = event.target.value;
    setSearchValue(value);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // since styled("div") not "form", we cannot use onSubmit
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value;
      setSearchValue(value);
      setSearchParams({ q: value });
      console.log("print searchParams: ", value);
      event.preventDefault();
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
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  // display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexWrap: "wrap",
                  overflow: "scroll",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 360,
                  color: "white",
                  bgcolor: "#757C86",
                  boxShadow: 24,
                  p: 4,
                  "@media (max-width: 375px)": {
                    width: 280,
                  },
                }}
              >
                <FLogin onClose={handleClose} />
              </Box>
            </Modal>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
