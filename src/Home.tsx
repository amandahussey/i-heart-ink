import { Box, Stack } from "@mui/material";
import iHeartInk from "./assets/i-heart-ink.jpg";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <Stack alignItems="center">
      <Box height="100vh">
        <img
          src={iHeartInk}
          alt="I Heart Ink Logo"
          style={{
            height: "70vh",
            maxHeight: 700,
            objectFit: "contain",
          }}
        />
      </Box>
      <Gallery />
    </Stack>
  );
};

export default Home;
