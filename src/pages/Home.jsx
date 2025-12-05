import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      {/* ===================== BANNER PRINCIPAL ===================== */}
      <div className="home-banner">
        {/* PON AQUÍ TU IMAGEN DE BANNER PRINCIPAL (1920x600 recomendado) */}
        {/* Ejemplo: /images/banner-principal.jpg */}
        <img 
          src="/images/baner-principal.jpg" 
          alt="Banner principal"
          className="home-banner-img"
        />

        <div className="home-banner-text">
          <h1>Hoodies Pasión Colombia</h1>
          <p>Calidad, identidad y pasión en cada diseño.</p>
          <Link to="/catalog" className="home-button">
            Ver catálogo
          </Link>
        </div>
      </div>

      {/* ===================== PILARES DE LA MARCA ===================== */}
      <div className="home-features">
        
        <div className="feature-card">
          {/* ÍCONO 1 (puedes cambiarlo luego por una imagen si quieres) */}
          <div className="feature-icon">🔥</div>
          <h3>Materiales de Calidad</h3>
          <p>
            Algodón perchado, suave, cálido y resistente. Listo para el día a día.
          </p>
        </div>

        <div className="feature-card">
          {/* ÍCONO 2 */}
          <div className="feature-icon">👨‍👩‍👧</div>
          <h3>Empresa Familiar</h3>
          <p>
            Diseños hechos con pasión y dedicación. Nuestra filosofía: insistir, persistir y nunca desistir.
          </p>
        </div>

        <div className="feature-card">
          {/* ÍCONO 3 */}
          <div className="feature-icon">🚚</div>
          <h3>Entregas en Bogotá</h3>
          <p>
            Actualmente realizamos entregas principalmente en Bogotá, pero nuestro objetivo 
            es expandirnos a todo el país muy pronto.
          </p>

        </div>

      </div>
    </div>
  );
}
