import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

export default function MiddleDividers({ job }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "95%",
        maxWidth: 360,
        height: "90%",
        bgcolor: (theme) => theme.palette.primary.light,
        color: "#ffffff",
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
        <Typography color="#ffffff" variant="body2">
          {job.description}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Stack direction="row" spacing={1} display="flex">
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              sx={{
                fontSize: "0.45rem",
                backgroundColor: "#df4747",
                color: "#ffffff",
              }}
              label={skill}
            />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          mt: 2,
          ml: 1,
          mb: 0.5,
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
            mb: 1,
            mt: 1,
          }}
          onClick={() => navigate(`/jobs/${job.id}`)}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
}
