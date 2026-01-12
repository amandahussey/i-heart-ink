import type { MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import { Instagram } from "@mui/icons-material"; // importing WLOG to get type for icon

type TMuiIcon = typeof Instagram;

const IconButtonWithGradient = ({
  Icon,
  color1,
  color2,
  href,
  onClick,
}: {
  Icon: TMuiIcon;
  color1: string;
  color2: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <IconButton target="_blank" href={href ?? ""} onClick={onClick}>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={0}>
          <stop offset={0} stopColor={color1} />
          <stop offset={1} stopColor={color2} />
        </linearGradient>
      </svg>
      <Icon fontSize="small" sx={{ fill: "url(#linearColors)" }} />
    </IconButton>
  );
};

export default IconButtonWithGradient;
