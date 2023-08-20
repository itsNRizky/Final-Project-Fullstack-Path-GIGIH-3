import React from "react";
import ProductCard from "./components/ProductCard";
import "./css/scroll.css";

const ProductList = ({ products }) => {
  return (
    <div className="flex gap-2 py-5 w-full hide-scrollbar overflow-x-auto px-3">
      {products.map((p) => (
        <ProductCard key={p} id={p} />
      ))}
    </div>
  );
};

export default ProductList;
