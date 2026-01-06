import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  Box,
  IconButton,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import iHeartInk from "./assets/i-heart-ink.jpg";

const INSTAGRAM_HANDLE = "iheartink_";

function Nav() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down(667));
  const isXs = useMediaQuery(theme.breakpoints.down(390));

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* Separate home link from other buttons */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          {/* Home link */}
          <Stack direction="row" alignItems="center">
            <Link href="/" mr={2}>
              <img
                src={iHeartInk}
                alt="I Heart Ink Logo"
                style={{
                  height: 260,
                  objectFit: "contain",
                }}
              />
            </Link>
          </Stack>

          {/* Buttons */}
          <Stack
            direction="row"
            justifyContent={isSm ? "space-evenly" : "flex-start"}
          >
            {/* Work */}
            <Button
              sx={{ my: 2, display: "block", fontSize: isXs ? 16 : undefined }}
            >
              Work
            </Button>

            {/* Artist */}
            <Button
              sx={{ my: 2, display: "block", fontSize: isXs ? 16 : undefined }}
            >
              Artist
            </Button>

            {/* Booking */}
            <Button
              sx={{ my: 2, display: "block", fontSize: isXs ? 16 : undefined }}
            >
              Booking
            </Button>

            {/* Instagram */}
            <Box alignSelf="center">
              <IconButton
                href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                target="_blank"
              >
                <Instagram
                  style={{ color: "white" }}
                  fontSize={isXs ? "small" : "medium"}
                />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
