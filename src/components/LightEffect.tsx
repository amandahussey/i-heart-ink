import { useMediaQuery } from "@mui/material";
import { theme } from "../theme";

import "./LightEffect.css";

function LightEffect() {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="container">
      <div
        className="streak-big streak-blue"
        style={{ top: "10%", left: "10%" }}
      ></div>
      <div
        className="streak-small streak-blue"
        style={{ top: "20%", left: isSm ? "20%" : "15%" }}
      ></div>
      <div
        className="streak-small streak-blue"
        style={{ top: "15%", left: isSm ? "25%" : "20%" }}
      ></div>
      <div
        className="streak-small streak-blue"
        style={{ top: "10%", right: isSm ? "25%" : "20%" }}
      ></div>
      <div
        className="streak-small streak-blue"
        style={{ top: "20%", right: isSm ? "20%" : "15%" }}
      ></div>
      <div
        className="streak-big streak-blue"
        style={{ top: "15%", right: "10%" }}
      ></div>
    </div>
  );
}

export default LightEffect;
