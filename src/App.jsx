import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Career,
  Privacypolicy,
  Community,
  Contact,
  OurTeam,
} from "./pages/indexPages.js";
import { Header, Footer } from "./components/indexComponenst.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Pages Router */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
