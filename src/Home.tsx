import { Stack } from "@mui/material";
import iHeartInk from "./assets/i-heart-ink.jpg";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <Stack alignItems="center">
      <img
        src={iHeartInk}
        alt="I Heart Ink Logo"
        style={{
          height: 360,
          objectFit: "contain",
        }}
      />
      <Gallery />
    </Stack>
  );
};

export default Home;
