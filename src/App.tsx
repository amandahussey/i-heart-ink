import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Stack, ThemeProvider } from "@mui/material";

import { theme } from "./theme";

import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import { NavContext } from "./NavContext";
import LightEffect from "./LightEffect";

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
