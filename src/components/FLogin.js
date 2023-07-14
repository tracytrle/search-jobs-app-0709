import { React, useState, useContext } from "react";

import { useForm } from "react-hook-form";
import {
  Stack,
  // Alert,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FTextField } from "./LoginHelperMethods/index.js";
import Box from "@mui/material/Box";
import AuthContext from "./AuthComponents/AuthContext";

function FLogin(callback) {
  const defaultValues = {
    username: "tructran",
    password: "123",
  };

  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const { register, watch } = useForm();

  const auth = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    auth.login(data.username, callback);
  };

  const handleLogin = () => {
    const username = watch("username");
    const password = watch("password");
    console.log("username: ", username);
    auth.login(username, callback);
  };

  return (
    <Box gap={4}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Login My Form
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} mb="30px">
          {/* {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )} */}
          <FTextField name="username" label="Username" ref={register} />
          <FTextField
            name="password"
            label="password"
            type={showPassword ? "text" : "password"}
            ref={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={handleLogin}
          marginTop="20px"
        >
          Sign in
        </LoadingButton>
        <Box></Box>
      </FormProvider>
    </Box>
  );
}

export default FLogin;
