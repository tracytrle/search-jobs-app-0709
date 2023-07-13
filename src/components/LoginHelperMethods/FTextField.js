import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
          inputProps={{
            style: { color: "white" },
            defaultValue: field.value || "",
          }}
          label={label}
        />
      )}
    />
  );
}

export default FTextField;
