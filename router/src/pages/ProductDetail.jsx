import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
        <h2>Product Detail</h2>
        <p>ID do produto: {id}</p>

    </div>
  );
}

export default ProductDetail;
