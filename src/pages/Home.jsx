import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      {/* ===================== BANNER PRINCIPAL ===================== */}
      <div className="home-banner">
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
          <div className="feature-icon">🔥</div>

          <h3>Materiales de Calidad</h3>

          <p>
            Algodón perchado, suave, cálido y resistente.
            Listo para el día a día.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👨‍👩‍👧</div>

          <h3>Empresa Familiar</h3>

          <p>
            Diseños hechos con pasión y dedicación.
            Nuestra filosofía: insistir, persistir y nunca desistir.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🚚</div>

          <h3>Entregas en Bogotá</h3>

          <p>
            Actualmente realizamos entregas principalmente en Bogotá,
            pero nuestro objetivo es expandirnos a todo el país muy pronto.
          </p>
        </div>

      </div>
      
      {/* ===================== COMO COMPRAR ===================== */}

<div className="how-buy-section">

  <h2>🛒 ¿Cómo comprar?</h2>

  <div className="how-buy-grid">

    <div className="how-buy-card">
      <div className="how-buy-number">1</div>

      <h3>Escoge tu hoodie</h3>

      <p>
        Explora nuestro catálogo y encuentra el diseño que más te guste.
      </p>
    </div>

    <div className="how-buy-card">
      <div className="how-buy-number">2</div>

      <h3>Escríbenos por WhatsApp</h3>

      <p>
        Te ayudaremos con tallas, colores y personalización.
      </p>
    </div>

    <div className="how-buy-card">
      <div className="how-buy-number">3</div>

      <h3>Personaliza tu pedido</h3>

      <p>
        Algunos hoodies permiten agregar nombres y elegir colores.
      </p>
    </div>

    <div className="how-buy-card">
      <div className="how-buy-number">4</div>

      <h3>Coordinamos la entrega</h3>

      <p>
        Actualmente realizamos entregas principalmente en Bogotá.
      </p>
    </div>

  </div>

</div>


      {/* ===================== INSTAGRAM ===================== */}

      <div className="instagram-section">
        <h2>📸 Síguenos en Instagram</h2>

        <p>
          Descubre nuevos diseños, hoodies personalizados
          y más contenido exclusivo.
        </p>

        <a
          href="https://www.instagram.com/hoodiespasioncolombia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          className="instagram-button"
        >
          Ver Instagram
        </a>
      </div>

    </div>
  );
}