import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider, useMediaQuery } from "@mui/material";

import { theme } from "./theme";

import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import { NavContext } from "./NavContext";

import "./App.css";

function App() {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);
  const startOfWorkRef = useRef(null as null | HTMLElement);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <NavContext.Provider
          value={{ activeTab, setActiveTab, startOfWorkRef }}
        >
          <Stack
            minHeight="100vh"
            width="100%"
            style={{ background: "black", color: "#E6FFFE", paddingBottom: 40 }}
          >
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

            <Nav />
            <ScrollToTop />

            <Routes>
              {/* <Route path="/artist" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/" element={<Home />} />
            </Routes>
          </Stack>
        </NavContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
