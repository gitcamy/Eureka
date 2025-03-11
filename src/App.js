import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BackToTopButton from "./components/BackToTopButton";
import { MobileProvider } from "./context/MobileContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <MobileProvider>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <BackToTopButton />
        </div>
      </Router>
    </MobileProvider>
  );
}

export default App;
