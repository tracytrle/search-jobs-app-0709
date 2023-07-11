import Grid from "@mui/material/Grid";

import JobBox from "./JobBox";

export default function showingJobs({ jobs, page }) {
  return (
    <Grid container spacing={2} mt={1}>
      {jobs.map((job) => (
        <Grid key={job.id} item xs={12} md={6} lg={4}>
          <JobBox job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
