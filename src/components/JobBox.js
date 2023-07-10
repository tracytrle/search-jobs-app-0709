import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { sizeHeight } from "@mui/system";

export default function MiddleDividers({ job }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              {job.title}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          {job.description}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Stack direction="row" spacing={1} display="flex">
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              sx={{
                fontSize: "0.55rem",
                backgroundColor: "#ff5722",
              }}
              label={skill}
            />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          mt: 3,
          ml: 1,
          mb: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: "blue",
            color: "blue",
            fontSize: "0.625rem",
            mb: 0,
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
}
