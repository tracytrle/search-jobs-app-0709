import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({ PageCount, changePage }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    changePage(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Typography></Typography>
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
        }}
        count={PageCount}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
