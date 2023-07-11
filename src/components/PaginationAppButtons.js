import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function CustomIcons(nums) {
  const [page, setPage] = useState(1);

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "yellow",
        mt: 3,
        "& .MuiPaginationItem-root": {
          color: "white",
        },
      }}
    >
      <Pagination
        count={nums}
        renderItem={(nums) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            onChange={(event, pageNum) => {
              setPage(pageNum);
            }}
          />
        )}
      />
    </Stack>
  );
}
