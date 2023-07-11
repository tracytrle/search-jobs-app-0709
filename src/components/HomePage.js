import React from "react";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Grid";
import jobData from "../getData";
import PaginationAppButtons from "./PaginationAppButtons";
import ShowingJobs from "./ShowingJobs.js";
import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationApp from "./PaginationApp";

const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get("q");

  function changePage(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await jobData.getJobs(page, searchInput);
      setJobs(data.jobs);
      setTotalPages(data.totalPage);
      console.log("Hompage searchInput: ", searchInput);
      console.log("print totalPage: ", totalPages);
      // console.log(`data.jobs: ${JSON.stringify(data.jobs)}`);
      // console.log("jobs: ", jobs);
      // console.log("page: ", page);
    };
    fetchData();
  }, [page, searchInput]);

  useEffect(() => {
    console.log("-- Homepage jobs: ", jobs);
    console.log("-- Homepage page: ", page);
    console.log("-- Homepage totalpage: ", totalPages);
  }, [jobs, page, totalPages]);

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
      {" Testing "}
      {jobs.length > 0 ? (
        <>
          <ShowingJobs jobs={jobs} page={page} />
          <Box
            sx={{
              mt: 2,
              mb: 2,
              color: "white",
            }}
          >
            <PaginationApp PageCount={totalPages} changePage={changePage} />
          </Box>
        </>
      ) : (
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          No Job found
        </Typography>
      )}
    </Container>
  );
}
