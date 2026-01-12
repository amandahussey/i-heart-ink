import { Stack } from "@mui/material";
import jesus from "../assets/jesus.jpg";
import queen from "../assets/queen.jpg";

import "./Gallery.css";

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
    <Stack spacing={10} className="gallery" pb={12}>
      {IMAGES.map((img) => (
        <img key={img.src} src={img.src} loading="lazy" />
      ))}
    </Stack>
  );
};

export default Gallery;
