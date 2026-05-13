// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail"; // asegúrate de que existe
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import FloatingInstagram from "./components/FloatingInstagram";


export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", maxWidth: 1100, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        
        <Footer />
      </main>

      {/* Botón flotante global (se muestra en todas las páginas) */}
      <FloatingWhatsApp />
      <FloatingInstagram />
    </div>
  );
}
