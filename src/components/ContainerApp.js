import * as React from "react";
import Container from "@mui/material/Container";

function ContainerApp(props) {
  return (
    <Container
      sx={{
        color: "black",
        // height: "90vh",
        backgroundColor: "transparent",
        width: "90%",
        height: "90vh",
        minHeight: "80vh",
        maxWidth: "100vw",
        display: "block",
        flexDirection: "row",
        justifyContent: "center",
        mt: -3,
        // position: "static",

        // alignItems: "center",
      }}
      // maxWidth={false}
      disableGutters
      {...props}
    />
  );
}

export default ContainerApp;
