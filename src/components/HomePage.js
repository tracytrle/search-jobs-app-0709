import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Container from "@mui/material/Grid";
import jobData from "../getData";
import ShowingJobs from "./ShowingJobs.js";
import { useSearchParams } from "react-router-dom";
import PaginationApp from "./PaginationApp";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("q");

  // update change page when click on the pagination
  function changePage(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await jobData.getJobs(page, searchInput);
      setJobs(data.jobs);
      setTotalPages(data.totalPage);
    };
    fetchData();
  }, [page, searchInput, totalPages]);
  return (
    <Container
      sx={{
        color: "black",
        maxWidth: "90vw",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 1,
      }}
    >
      {jobs.length > 0 && (
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
      )}
    </Container>
  );
}
