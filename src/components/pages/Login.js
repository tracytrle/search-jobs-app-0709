import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LoginForm from "../LoginForm";
// import FLogin from "../FLogin";

function Login() {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";
  console.log("=========print inLogin from: ", from);

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        overflow: "scroll",
        position: "absolute",
        display: "flex",
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
      <LoginForm
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
