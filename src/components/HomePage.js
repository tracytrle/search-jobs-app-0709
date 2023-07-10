import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";
import Container from "@mui/material/Grid";
import JobBox from "./JobBox";
import PaginationAppButtons from "./PaginationAppButtons";
import ShowingJobs from "./ShowingJobs.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        color: "black",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 1,
      }}
    >
      <ShowingJobs page={1} />
      <Box
        sx={{
          mt: 2,
          mb: 2,
          color: "white",
        }}
      >
        <PaginationAppButtons />
      </Box>
    </Container>
  );
}
