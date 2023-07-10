import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";

import JobBox from "./JobBox";

export default function showingJobs({ page }) {
  let startIndex = (page - 1) * 10;
  let endIndex = startIndex + 10;
  return (
    <Grid container spacing={2} mt={1}>
      {jobs.slice(startIndex, endIndex).map((job) => (
        <Grid key={job.id} item xs={12} md={6} lg={4}>
          <JobBox job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
