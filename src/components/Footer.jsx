import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h3>Hoodies Pasión Colombia</h3>
          <p>Insistir, persistir y nunca desistir.</p>
          <p>Envíos a toda Bogota, proximamente nos expandiremos</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>WhatsApp: <a href="https://wa.me/573229685782" target="_blank" rel="noreferrer">322 968 5782</a></p>
          <p>Correo: hoodiespasioncolombia@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <a 
            href="https://www.instagram.com/hoodiespasioncolombia" 
            target="_blank" 
            rel="noreferrer"
         >
            Instagram
         </a>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hoodies Pasión Colombia • Todos los derechos reservados
      </div>
    </footer>
  );
}
