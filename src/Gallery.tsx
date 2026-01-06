import { Stack } from "@mui/material";
import jesus from "./assets/jesus.jpg";
import queen from "./assets/queen.jpg";

const IMAGES = [
  {
    src: jesus,
  },
  {
    src: queen,
  },
];

const Gallery = () => {
  return (
    <Stack spacing={4}>
      {IMAGES.map((img) => (
        <img
          key={img.src}
          src={img.src}
          loading="lazy"
          style={{
            width: 300,
            objectFit: "contain",
          }}
        />
      ))}
    </Stack>
  );
};

export default Gallery;
