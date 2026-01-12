import { Instagram } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { INSTAGRAM_HANDLE } from "../constants";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Typography fontSize={12}>Copyright &copy; 2026 I Heart Ink</Typography>
      <IconButton
        href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
        target="_blank"
      >
        <Instagram fontSize="small" sx={{ color: "primary.light" }} />
      </IconButton>
    </Stack>
  );
};

export default Footer;
