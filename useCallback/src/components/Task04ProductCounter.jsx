import { useState, useCallback } from "react";
import Product from "./Product";

function Task04ProductCounter() {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCallback(() => {
    console.log("Product added to cart");
  }, []);

  return (
    <>
      <h2>Quantity: {quantity}</h2>
      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>
      <button onClick={() => setQuantity(quantity - 1)}>
        Decrease Quantity
      </button>
      <Product onAdd={addToCart} />
    </>
  );
}
export default Task04ProductCounter;
