import { useContext } from "react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import iHeartInk from "../assets/i-heart-ink.jpg";
import Gallery from "./Gallery";
import { NavContext } from "../contexts/NavContext";
import { NAV_HEIGHT } from "../constants";

const Home = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { startOfWorkRef } = useContext(NavContext);

  return (
    <Stack alignItems="center">
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={iHeartInk}
          alt="I Heart Ink Logo"
          style={{
            width: isSm ? "90vw" : "60vw",
            maxWidth: 600,
            objectFit: "contain",
            position: "relative",
            top: `-${NAV_HEIGHT}`, // offset to account for nav height
          }}
        />
      </Box>
      <Box ref={startOfWorkRef}>
        <Gallery />
      </Box>
    </Stack>
  );
};

export default Home;
