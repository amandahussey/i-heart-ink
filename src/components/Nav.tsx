import {
  Container,
  Button,
  Box,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { INSTAGRAM_HANDLE } from "../constants";
import { NavContext } from "../contexts/NavContext";
import { useContext, useEffect } from "react";
import IconButtonWithGradient from "./IconButtonWithGradient";
import { useNavigate } from "react-router-dom";

const PADDING_FOR_NAV_SCROLL = 100;

function Nav() {
  const navigate = useNavigate();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { activeTab, setActiveTab, startOfWorkRef } = useContext(NavContext);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "Artist", path: "/artist" },
    { label: "Booking", path: "/booking" },
  ];

  // On mount, check and set active tab based on current path
  useEffect(() => {
    const currentPath = window.location.hash.replace("#", "");
    const foundIndex = navItems.findIndex((item) => item.path === currentPath);
    if (foundIndex !== -1) {
      setActiveTab(foundIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNavItem = (index: number) => {
    // Compare current path to new path to determine behavior
    const currentPath = navItems[activeTab].path;
    const newPath = navItems[index].path;

    if (currentPath === newPath && newPath === "/") {
      // Scroll to top of work section if already on work page
      if (startOfWorkRef?.current) {
        window.scrollTo({
          top: startOfWorkRef.current.offsetTop - PADDING_FOR_NAV_SCROLL,
          behavior: "smooth",
        });
      }
      return;
    }

    // Navigate to new page
    navigate(newPath, { replace: false });

    // Finally, set new active tab index
    setActiveTab(index);
  };

  // Adds linear gradient to button text
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
        background: "black",
        alignSelf: "center",
        zIndex: 1,
        position: "fixed",
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
                  ...{
                    fontWeight: activeTab === index ? "700" : "normal",
                  },
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
            <IconButtonWithGradient
              Icon={Instagram}
              color1={theme.palette.secondary.light}
              color2={theme.palette.secondary.dark}
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
            />
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
