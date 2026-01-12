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
import { INSTAGRAM_HANDLE } from "../consts";
import { NavContext } from "../contexts/NavContext";
import { useContext } from "react";
import IconButtonWithGradient from "./IconButtonWithGradient";

const PADDING_FOR_NAV_SCROLL = 100;

function Nav() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { activeTab, setActiveTab, startOfWorkRef } = useContext(NavContext);

  const navItems = [
    { label: "Work", path: "/" },
    { label: "Artist", path: "/#/artist" },
    { label: "Booking", path: "/#/booking" },
  ];

  const handleClickNavItem = (index: number) => {
    setActiveTab(index);
    if (index === 0 && startOfWorkRef?.current) {
      const position = startOfWorkRef.current.offsetTop;
      window.scrollTo({
        top: position - PADDING_FOR_NAV_SCROLL,
        behavior: "smooth",
      });
    }
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
                    fontWeight: activeTab === index ? "500" : "normal",
                  },
                }}
                onClick={
                  item.path ? undefined : () => handleClickNavItem(index)
                }
                href={item.path}
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
