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

function Nav() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(390));

  const { activeTab, setActiveTab } = useContext(NavContext);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "Artist", path: "/artist" },
    { label: "Booking", path: "/booking" },
  ];

  const handleClickNavItem = (index: number) => {
    setActiveTab(index);
  };

  const navButtonStyle = {
    // my: 2,
    // display: "block",
    // fontSize: isXs ? 16 : 20,
    // backgroundcolor: "primary",
    // backgroundImage: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    // backgroundSize: "100%",
    // backgroundRepeat: "repeat",
    // backgroundClip: "text",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // cursor: "pointer",
  };

  return (
    <Container maxWidth="xl" style={{}}>
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
          <Box alignSelf="center">
            <IconButton
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
            >
              <Instagram fontSize="small" sx={{ color: "primary.light" }} />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
