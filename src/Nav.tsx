import {
  Container,
  Button,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { INSTAGRAM_HANDLE } from "./consts";
import { NavContext } from "./NavContext";
import { useContext } from "react";

const LIGHT_ORANGE = "rgba(241,184,74,1)";
const DARK_ORANGE = "rgba(207,113,8,1)";

function Nav() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { activeTab, setActiveTab, startOfWorkRef } = useContext(NavContext);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "Artist", path: "/artist" },
    { label: "Booking", path: "/booking" },
  ];

  const handleClickNavItem = (index: number) => {
    setActiveTab(index);
    if (index === 0 && startOfWorkRef?.current) {
      startOfWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navButtonStyle = {
    my: 2,
    display: "block",
    fontSize: isSm ? 16 : 20,
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        position: "fixed",
        background: "black",
        alignSelf: "center",
        zIndex: 1,
      }}
    >
      <Toolbar disableGutters>
        {/* Separate main buttons from instagram */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
        >
          <Stack
            direction="row"
            spacing={4}
            flexGrow={1}
            justifyContent="center"
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  ...navButtonStyle,
                  ...{ fontWeight: activeTab === index ? "500" : "normal" },
                }}
                onClick={() => handleClickNavItem(index)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Instagram */}
          <Box
            alignSelf="center"
            position={isSm ? "relative" : "absolute"}
            right={isSm ? 0 : 16}
          >
            <IconButton
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
              sx={{
                backgroundcolor: "primary",
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={0}>
                  <stop offset={0} stopColor={LIGHT_ORANGE} />
                  <stop offset={1} stopColor={DARK_ORANGE} />
                </linearGradient>
              </svg>
              <Instagram fontSize="small" sx={{ fill: "url(#linearColors)" }} />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
