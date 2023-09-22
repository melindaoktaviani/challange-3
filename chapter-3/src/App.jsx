import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // global style (bootstrap)
import Home from "./pages/home";
import Header from "./components/header";
import Listhal1 from "./pages/listhal1";
import Halaman2 from "./pages/halaman2";



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listhal1" element={<Listhal1 />} />
        <Route path="/halaman2" element={<Halaman2 />} />
        
        {/* The page for not found url path */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
