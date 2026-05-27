import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const phone = "573229685782";
  const text = encodeURIComponent(`Hola, quiero info del buso: ${product.title}`);
  const waLink = `https://wa.me/${phone}?text=${text}`;

  // Galería: imagen seleccionada
  // Si el producto tiene "images", las usa
// Si solo tiene "image", creamos una lista con 1 imagen
const imageList = product.images || [product.image];

const [selectedImage, setSelectedImage] = useState(imageList[0]);


  return (
    <div
      className="card"
      style={{
        padding: 25,
        maxWidth: 800,
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      {/* ======================= IMAGEN PRINCIPAL ======================= */}
      <img
        src={selectedImage}
        alt={product.title}
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 12,
          objectFit: "contain",
          background: "#f1f1f1",
          padding: 10,
          marginBottom: 15
        }}
      />

      {/* ======================= MINIATURAS ======================= */}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginBottom: 25
        }}
      >
        {imageList.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelectedImage(img)}
            style={{
              width: 70,
              height: 70,
              borderRadius: 8,
              objectFit: "cover",
              cursor: "pointer",
              border: selectedImage === img ? "3px solid var(--accent)" : "2px solid #ccc",
            }}
          />
        ))}
      </div>

      {/* TITULO */}
      <h1 style={{ marginBottom: 10 }}>{product.title}</h1>

      {/* DESCRIPCIÓN */}
      <p style={{ fontSize: 17, lineHeight: "1.5" }}>{product.description}</p>

      {/* PRECIO */}
      <h2 style={{ marginTop: 20, color: "var(--accent)", fontSize: 26 }}>
        ${product.price}
      </h2>

      {/* ------------------------------- */}
      {/* SECCIÓN DE TALLAS */}
      {/* ------------------------------- */}
      <div
        style={{
          marginTop: 30,
          textAlign: "left",
          background: "#f7f7f7",
          padding: 20,
          borderRadius: 12
        }}
      >
        <h3 style={{ marginBottom: 10 }}>Tallas disponibles</h3>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {product.sizes.map((talla) => (
            <div
              key={talla}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid #ccc",
                background: "white",
                fontWeight: "600",
                fontSize: 16
              }}
            >
              {talla}
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------- */}
      {/* SECCIÓN DE MATERIALES */}
      {/* ------------------------------- */}
      <div
        style={{
          marginTop: 25,
          textAlign: "left",
          background: "#f7f7f7",
          padding: 20,
          borderRadius: 12
        }}
      >
        <h3 style={{ marginBottom: 10 }}>Materiales</h3>

        <ul style={{ paddingLeft: 20, fontSize: 16, lineHeight: "1.6" }}>
          {product.materials.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      {/* BOTÓN DE WHATSAPP */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: 25,
          background: "var(--accent)",
          padding: "12px 20px",
          borderRadius: 8,
          color: "white",
          textDecoration: "none",
          fontSize: 18,
          fontWeight: "600"
        }}
      >
        Pedir por WhatsApp
      </a>

      {/* BOTÓN DE VOLVER */}
      <div style={{ marginTop: 25 }}>
        <Link
          to="/catalog"
          style={{
            color: "var(--accent)",
            textDecoration: "underline",
            fontSize: 16
          }}
        >
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
