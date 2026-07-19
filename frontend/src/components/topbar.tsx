import { Link, Box, Container, Typography } from "@mui/material";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useStore } from "../store";

export default function TopBar() {
  const {
    state: { mode },
    dispatch,
  } = useStore();
  return (
    <Box sx={{ bgcolor: "custom.bgtop" }}>
      <Container
        maxWidth="xl"
        sx={{
          paddingY: 1,
          // mx: "262px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box component="span">
          <Typography
            component="span"
            sx={{
              color: "custom.secondarytop",
              fontWeight: "bolder",
              fontSize: 12,
            }}
          >
            Mon-Thu:{" "}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: "bolder",
              color: "custom.primarytop",
              fontSize: 12,
            }}
          >
            9:00 AM - 5:30 PM
          </Typography>
        </Box>
        <Box>
          <Typography
            component="span"
            sx={{
              color: "custom.secondarytop",
              fontWeight: "bolder",
              fontSize: 12,
            }}
          >
            Visit our showroom in Zaiona Street Baghdad{" "}
            <Link
              sx={{
                ml: 1,
                color: "custom.primarytop",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
              href={"https://t.me/mf751"}
            >
              Contact Us
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography
            component="span"
            sx={{
              color: "custom.primarytop",
              fontWeight: "bolder",
              fontSize: 12,
            }}
          >
            Call Us: (00) 1234 5678{" "}
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1, // spacing between icons
                ml: 1, // space from the text
                verticalAlign: "middle",
              }}
            >
              <FaFacebookSquare
                size={16}
                color={mode === "light" ? "white" : "black"}
              />
              <BiLogoInstagramAlt
                size={18}
                color={mode === "light" ? "white" : "black"}
              />
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
