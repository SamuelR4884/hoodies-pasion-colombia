import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      <div className="header-inner">

        <div className="brand">
          Hoodies Pasión Colombia
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>

          <Link
            to="/catalog"
            onClick={() => setMenuOpen(false)}
          >
            Catálogo
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            Quiénes somos
          </Link>

          <a
            href="https://wa.me/573229685782?text=Hola%20Hoodies%20Pasi%C3%B3n%20Colombia"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp
          </a>

        </nav>

      </div>

    </header>
  );
}