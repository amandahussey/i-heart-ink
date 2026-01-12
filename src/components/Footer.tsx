import { Instagram } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { INSTAGRAM_HANDLE } from "../consts";

const Footer = () => {
  return (
    <Stack alignItems="center" spacing={1} mt={4}>
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
