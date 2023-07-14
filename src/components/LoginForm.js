import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AuthContext from "./AuthComponents/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

const style = {
  bgcolor: "#757C86",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "1px solid",
  padding: "5px",
  borderRadius: "0px",
  flexWrap: "wrap",
  overflow: "scroll",

  "@media (max-width: 375px)": {
    width: 240,
  },
};

function LoginForm({ callback }) {
  const [username] = useState("tructran");
  const [password] = useState("123");

  // const { register, handleSubmit } = useForm();

  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    auth.login(username, callback);
  };

  return (
    <Box sx={style} gap={4}>
      <Typography
        sx={{ display: "flex", justifyContent: "center " }}
        variant="h4"
        component="div"
      >
        Login
      </Typography>
      <TextField label="Username" defaultValue={username} sx={{ m: 1 }} />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          defaultValue={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        size="large"
        type="submit"
        onClick={handleLogin}
        sx={{ m: 1, width: "10ch", margin: "auto" }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
