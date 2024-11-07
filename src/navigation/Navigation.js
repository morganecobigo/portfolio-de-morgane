import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import CV from "../pages/CV/Cv";



const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;