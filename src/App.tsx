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
