import { useState } from "react";
import {useCartContext} from "../context/CartContext";

function Counter({ product ,count}) {
  const {updateCart} = useCartContext()

  function increment() {
    updateCart(product.id, count + 1)
  }


  function decrement() {
    if (count > 1) {
      updateCart(product.id, count - 1)
    }

  }

  return (
    <div className="quantity-div">
      <button className="minus-btn" onClick={() => decrement()}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <span>{count}</span>
      <button className="plus-btn" onClick={() => increment()}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}



export default Counter;