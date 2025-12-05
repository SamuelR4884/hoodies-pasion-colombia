// src/components/FloatingWhatsApp.jsx
import React from "react";

export default function FloatingWhatsApp() {
  const phone = "573238077800"; // número en formato E.164 sin "+"
  const text = encodeURIComponent("Hola, quiero más info sobre sus hoodies.");
  const waLink = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="Contactar por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      {/* Icono WhatsApp SVG (blanco) */}
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M20.52 3.48A11.86 11.86 0 0012.04.5C6.06.5 1.4 4.9.74 10.6c-.54 4.34 1.1 8.47 4.48 10.82L3.1 23.5l2.25-1.03a12.13 12.13 0 005.46 1.16c5.98 0 10.64-4.4 11.3-10.1.37-3.01-.18-6.06-1.59-8.05zM12 21.2c-1.86 0-3.7-.4-5.34-1.18l-.38-.19-1.48.68.32-1.37-.24-.42A9.1 9.1 0 012.9 10.6c.56-4.07 4.7-7.11 9.14-7.11 2.44 0 4.74.92 6.46 2.6 1.72 1.69 2.6 4 2.28 6.39-.63 3.99-4.22 6.92-8.08 6.92z" />
        <path d="M17.2 14.02c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.18.2-.36.22-.65.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.36.43-.54.14-.18.18-.3.29-.5.1-.18.05-.34-.02-.49-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51l-.55-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.83.15.18 1.94 2.97 4.7 4.17 1.02.46 1.81.73 2.43.94.98.33 1.87.28 2.57.17.78-.13 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.27-.18-.56-.34z" />
      </svg>
    </a>
  );
}
