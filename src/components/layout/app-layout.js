import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { MainPage } from "../../main_page";

export const AppLayout = () => {
  const [isAppBarFloating, setAppBarFloating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setAppBarFloating(window.pageYOffset > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      disableGutters
      sx={{
        margin: 0,
        padding: 0,
        width: "100vw", // Set width to 100% of viewport width
        height: "100vh", // Set height to 100% of viewport height
        overflow: "hidden", // Hide any potential overflow
        html: {
            margin: 0, // Reset margin for the html element
          },
        body: {
            margin: 0, // Reset margin for the body element
          },
        "#root": {
            margin: 0, // Reset margin for the root element (if it has an id="root")
          },
      }}
    >
      <AppBar
        position={isAppBarFloating ? "fixed" : "static"}
        sx={{
          backgroundColor: "#6F473B",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to="/"
              style={{ textDecoration: "none", flexGrow: 1, display: "flex" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                }}
              >
                taspa
              </Typography>
            </Link>

            <Box
              sx={{
                display: "flex",
                flexGrow: 0,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                to="/"
                sx={{ color: "white", display: "block", mr: 2 }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="#about"
                sx={{ color: "white", display: "block", whiteSpace: "nowrap" }}
              >
                About us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Box>
  );
};
