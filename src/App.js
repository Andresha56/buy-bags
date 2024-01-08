
import React from "react";

import Detail from "./Components/productDetail/Detail";
import Footer from "./Components/footer/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Apps() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/details/:id" element={<Detail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Apps;
