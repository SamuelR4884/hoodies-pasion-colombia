import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  return (
    <div>
      <h1>Catálogo</h1>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
