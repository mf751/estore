import {
  Box,
  Container,
  Typography,
  Toolbar,
  Button,
  TextField,
  InputBase,
} from "@mui/material";
import ICON from "/src/assets/shopicon.svg";
import { RxAvatar } from "react-icons/rx";
import { useStore } from "../store";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <Typography
    component={Link}
    to={to}
    sx={{
      fontSize: 14,
      fontWeight: "bolder",
      textDecoration: "none",
      color: "text.primary",
    }}
  >
    {children}
  </Typography>
);

export default function NavBar() {
  const {
    state: { mode },
    dispatch,
  } = useStore();

  const [searchActivated, setSearchActivated] = useState(false);

  const getIcon = () => {
    if (mode === "light") {
      return <FaRegMoon style={{ width: 20, height: 20 }} />;
    }
    return <FaRegSun style={{ width: 20, height: 20 }} />;
  };

  return (
    <Box
      sx={{
        borderBottom: "2px solid",
        borderBottomColor: "divider",
        display: "flex",
        alignItems: "center",
        height: 84,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingY: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={ICON}
          alt="icon"
          sx={{ width: 30, height: 30, objectFit: "cover" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {!searchActivated && (
            <Box
              className="left"
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 5,
                gap: 3,
              }}
            >
              <NavLink to="/laptops">Laptops</NavLink>
              <NavLink to="/pc">Desktop PCs</NavLink>
              <NavLink to="/networkdevices">Networking Devices</NavLink>
              <NavLink to="/printers_scanners">Printers & Scanners</NavLink>
              <NavLink to="/pc_parts">Pc Parts</NavLink>
              <NavLink to="/others">All Other Products</NavLink>
              <NavLink to="/repairs">Repairs</NavLink>
              <Button
                sx={{
                  ml: 3,
                  fontWeight: "bolder",
                  borderWidth: "2px",
                  borderRadius: 5,
                  borderColor: "primary.main",
                  paddingX: 3,
                  paddingY: "0px",
                }}
                variant="outlined"
              >
                Our Deals
              </Button>
            </Box>
          )}
          {searchActivated && (
            <Box
              className="left"
              sx={{
                flexGrow: 2,
                paddingX: 3,
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <InputBase
                sx={{
                  width: "100%",
                  backgroundColor: "background.paper",
                  height: 56,
                  borderRadius: 6,
                  paddingX: 3,
                }}
                placeholder="Search entries store here"
              />
              <IoIosSearch
                style={{
                  width: 26,
                  height: 26,
                  position: "absolute",
                  right: 42,
                  pointerEvents: "none",
                }}
              />
            </Box>
          )}
          <Box className="right" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              onClick={() => setSearchActivated((prev) => !prev)}
              sx={{
                mr: 3,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: 2,
              }}
            >
              {!searchActivated ? (
                <IoIosSearch color={mode} style={{ width: 26, height: 26 }} />
              ) : (
                <Box
                  sx={{
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RxCross2 style={{ width: 26, height: 26 }} />
                </Box>
              )}
            </Box>
            <Box sx={{ mr: 3, display: "flex", alignItems: "center" }}>
              <IoCartOutline color={mode} style={{ width: 26, height: 26 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "center",
              }}
              onClick={() => dispatch({ type: "SWITCH_MODE" })}
            >
              {getIcon()}
            </Box>
            <Box sx={{ ml: 3 }}>
              <RxAvatar
                color={mode}
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
