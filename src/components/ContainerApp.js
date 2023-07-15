import * as React from "react";
import Container from "@mui/material/Container";

function ContainerApp(props) {
  return (
    <Container
      sx={{
        color: "black",
        backgroundColor: "transparent",
        width: "90%",
        height: "90vh",
        minHeight: "80vh",
        maxWidth: "100vw",
        display: "block",
        flexDirection: "row",
        justifyContent: "center",
        mt: -3,
      }}
      disableGutters
      {...props}
    />
  );
}

export default ContainerApp;
