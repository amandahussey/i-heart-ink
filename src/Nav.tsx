import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Instagram } from "@mui/icons-material";

const INSTAGRAM_HANDLE = "iheartink_";

function Nav() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(390));

  const navButtonStyle = {
    my: 2,
    display: "block",
    fontSize: isXs ? 16 : undefined,
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, white)`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* Separate home link from other buttons */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
        >
          {/* Work */}
          <Button sx={navButtonStyle}>Work</Button>

          {/* Artist */}
          <Button sx={navButtonStyle}>Artist</Button>

          {/* Booking */}
          <Button sx={navButtonStyle}>Booking</Button>

          {/* Instagram */}
          <Box alignSelf="center">
            <IconButton
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
            >
              <Instagram fontSize="small" sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
