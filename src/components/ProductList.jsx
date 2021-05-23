import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const { products } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
