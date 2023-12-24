import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useOutletContext } from "react-router-dom";

const Packages = () => {
  const { products } = useOutletContext();

  return (
    <div>
      {products.map((product, i) => (
        <ProductCard title={product.Title} img={product.Photos[0]} key={i} />
      ))}
    </div>
  );
};

export default Packages;
