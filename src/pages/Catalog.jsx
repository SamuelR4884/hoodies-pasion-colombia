import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalog() {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Catálogo</h1>

      {/* ===================== BUSCADOR ===================== */}

      <div className="catalog-search-container">

        <input
          type="text"
          placeholder="Buscar hoodies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="catalog-search"
        />

      </div>

      {/* ===================== PRODUCTOS ===================== */}

      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
            />
          ))

        ) : (

          <p className="no-results">
            No encontramos hoodies con ese nombre.
          </p>

        )}

      </div>

    </div>
  );
}