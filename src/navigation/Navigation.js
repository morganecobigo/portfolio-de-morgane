import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/portfolio-de-morgane" element={<Home />} />
          <Route
            path="*"
            element={<Navigate replace to="/portfolio-de-morgane" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
