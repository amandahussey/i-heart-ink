import { Stack, Typography } from "@mui/material";
import ellis from "../assets/ellis.jpg";

const AboutArtist = () => {
  return (
    <Stack alignItems="center" spacing={10} mt={4}>
      <img src={ellis} alt="Artist Ellis" style={{ borderRadius: "50%" }} />
      <Typography variant="caption">
        I started when I was 18 in my dorm room.
      </Typography>
    </Stack>
  );
};

export default AboutArtist;
