import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Box, Stack, ThemeProvider } from "@mui/material";

import { theme } from "./theme";

import { NavContext } from "./contexts/NavContext";

import LightEffect from "./components/LightEffect";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import AboutArtist from "./components/AboutArtist";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { NAV_HEIGHT } from "./constants";

function App() {
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
            style={{ background: "black", color: "#E6FFFE" }}
          >
            <LightEffect />
            <Nav />
            <ScrollToTop />
            <Box flexGrow={1} style={{ marginTop: NAV_HEIGHT }}>
              <Routes>
                <Route path="/artist" element={<AboutArtist />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/work" element={<Home />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Box>

            <Footer />
          </Stack>
        </NavContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
