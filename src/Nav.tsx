import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { INSTAGRAM_HANDLE } from "./consts";

function Nav() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(390));

  const navButtonStyle = {
    my: 2,
    display: "block",
    fontSize: isXs ? 16 : 20,
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Container maxWidth="xl">
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
            {/* Work */}
            <Button sx={navButtonStyle}>Work</Button>

            {/* Artist */}
            <Button sx={navButtonStyle}>Artist</Button>

            {/* Booking */}
            <Button sx={navButtonStyle}>Booking</Button>
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
