import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">Hoodies Pasión Colombia</div>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/catalog">Catálogo</Link>
          <Link to="/about">Quiénes somos</Link>
          <a
            href="https://wa.me/573238077800?text=Hola%20Hoodies%20Pasi%C3%B3n%20Colombia"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
