import * as React from "react";
import Container from "@mui/material/Container";

function ContainerApp(props) {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        color: "black",
        minHeight: "95vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
        // alignItems: "center",
      }}
      // maxWidth={false}
      disableGutters
      {...props}
    />
  );
}

export default ContainerApp;
