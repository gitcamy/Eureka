import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MobileProvider } from "./context/MobileContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <MobileProvider>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </MobileProvider>
  );
}

export default App;
