import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const phone = "573229685782";
  const text = encodeURIComponent(`Hola, quiero info del buso: ${product.title}`);
  const waLink = `https://wa.me/${phone}?text=${text}`;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.images[0]}   // primera imagen del array
          alt={product.title}
          className="product-image"
        />


        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <strong className="product-price">
            ${product.price.toLocaleString()}
          </strong>
        </div>
      </Link>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="product-button"
      >
        Pedir por WhatsApp
      </a>
    </div>
  );
}
