import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlideShow from "./pages/SlideShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slideShow" element={<SlideShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
