import { Link, Box, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "./components/topbar";

export default function App() {
  return (
    <>
      <TopBar />
      <Box>
        <Container>
          <Toolbar disableGutters>
            <Typography sx={{ color: "text.primary" }}>H</Typography>
          </Toolbar>
        </Container>
      </Box>
      <Outlet />
    </>
  );
}
