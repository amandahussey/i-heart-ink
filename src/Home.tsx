import { Stack } from "@mui/material";
import iHeartInk from "./assets/i-heart-ink.jpg";

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
    </Stack>
  );
};

export default Home;
