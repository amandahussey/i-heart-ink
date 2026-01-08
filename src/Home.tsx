import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import iHeartInk from "./assets/i-heart-ink.jpg";
import Gallery from "./Gallery";

const Home = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack alignItems="center">
      <Box height="100vh">
        <img
          src={iHeartInk}
          alt="I Heart Ink Logo"
          style={{
            width: isSm ? "90vw" : "60vw",
            maxWidth: 600,
            objectFit: "contain",
          }}
        />
      </Box>
      <Gallery />
    </Stack>
  );
};

export default Home;
