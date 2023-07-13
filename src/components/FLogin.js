import { React, useState } from "react";

import { useForm } from "react-hook-form";
import {
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FTextField } from "./LoginHelperMethods/index.js";
import Box from "@mui/material/Box";

function FLogin() {
  const defaultValues = {
    email: "",
    password: "123",
  };

  const methods = useForm({ defaultValues });
  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", {
      message: "Server Response Error",
    });
    // rules={{required: true}};
  };
  return (
    <Box component="form" gap={4}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Login
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} mb="30px">
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="email" label="Email address" />
          <FTextField
            name="password"
            label="password"
            type={showPassword ? "text" : "password"}
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
