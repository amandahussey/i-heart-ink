import { HashRouter, Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider } from "@mui/material";

import { theme } from "./theme";

import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Stack
          minHeight="100vh"
          width="100%"
          style={{ background: "black", color: "#E6FFFE", paddingBottom: 40 }}
        >
          <Nav />
          <ScrollToTop />
          <div className="container">
            <div
              className="streak-big streak-blue"
              style={{ top: "10%", left: "10%" }}
            ></div>
            <div
              className="streak-small streak-orange"
              style={{ top: "20%", left: "15%" }}
            ></div>
            <div
              className="streak-small streak-blue"
              style={{ top: "15%", left: "20%" }}
            ></div>
            <div
              className="streak-small streak-blue"
              style={{ top: "10%", right: "20%" }}
            ></div>
            <div
              className="streak-small streak-orange"
              style={{ top: "20%", right: "15%" }}
            ></div>
            <div
              className="streak-big streak-blue"
              style={{ top: "15%", right: "10%" }}
            ></div>
          </div>

          <Routes>
            {/* <Route path="/artist" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Stack>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
