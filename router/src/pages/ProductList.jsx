import React from "react";

const productList = [
  { id: 1, name: "Produto1" },
  { id: 2, name: "Produto2" },
  { id: 3, name: "Produto3" },
];

const ProductList = () => {
  return (
    <div>
      <h2>Lista de Produtos</h2>

      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
