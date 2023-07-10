import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// export default function FixedContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container fixed>
//         <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
//       </Container>
//     </React.Fragment>
//   );
// }

function ContainerApp(props) {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        color: "black",
        minHeight: "100vh",
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
