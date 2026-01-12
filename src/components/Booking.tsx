import { Button, Stack, Typography } from "@mui/material";

const BOOKING_URL = "https://book.heygoldie.com/iHeartink";

const Booking = () => {
  return (
    <Stack alignItems="center">
      <Typography>Text "INK" to (773) 217-5696 or click below</Typography>
      <Button href={BOOKING_URL} target="_blank">
        Book Now
      </Button>
    </Stack>
  );
};

export default Booking;
