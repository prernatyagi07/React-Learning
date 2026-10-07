import { memo } from "react";

const Product = memo(function Product({ onAdd }) {
  return (
    <>
      <h3>Product: Shoes</h3>
      <button onClick={onAdd}>Add to Cart</button>
    </>
  );
});

export default Product;
