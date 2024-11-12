import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
