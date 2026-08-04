import "../styles/cart.css";
import OrderSummary from "../components/OrderSummary";
import CartItems from "../components/CartItems";
import API from "../services/axios";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { useCartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems, setCartItems, clearCart } = useCartContext();

  const handleClearCart = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the cart?",
    );
    if (confirmClear) {
      clearCart();
    }
  };

  return (
    <div className="cart-container">
      <div className="row cart-row">
        <div className="col-md-7">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="cart-title">Shopping Cart({cartItems.length}) </h2>
            {cartItems.length > 0 && (
              <button className="clear-cart-btn" onClick={handleClearCart}>
                Clear Cart
              </button>
            )}
          </div>
          <div className="row cart-items-container mt-3">
            <div className="col-12">
              <CartItems cartItem={cartItems} />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
