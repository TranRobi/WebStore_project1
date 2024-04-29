import Navbar from "./Navbar";
import React from "react";
import Home from "./pages/Home";
import Support from "./pages/Support";
import About from "./pages/About";
import Footer from "./Footer";
import SignIn from "./pages/Sign_in"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign_in" element={ <SignIn />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
