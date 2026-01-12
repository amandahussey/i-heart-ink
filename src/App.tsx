import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider } from "@mui/material";

import { theme } from "./theme";

import { NavContext } from "./contexts/NavContext";

import LightEffect from "./components/LightEffect";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import AboutArtist from "./components/AboutArtist";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

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
            style={{ background: "black", color: "#E6FFFE", paddingBottom: 40 }}
          >
            <LightEffect />
            <Nav />
            <ScrollToTop />
            <Routes>
              <Route path="/artist" element={<AboutArtist />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Stack>
        </NavContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
