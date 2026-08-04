import CheckoutSummaryItem from "./CheckoutSummaryItem";
import { useCartContext } from "../context/CartContext";
import { useState, useEffect } from "react";
import API from "../services/axios";
import { useNavigate } from "react-router-dom";
function CheckOutSummary() {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const [checkoutSummary, setCheckoutSummary] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    total: 0,
  });
  console.log(cartItems);

  useEffect(() => {
    const getCheckoutSummary = async () => {
      try {
        const response = await API.get("/cart/summary/");
        console.log(response.data);
        setCheckoutSummary(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCheckoutSummary();
  }, []);

  return (
    <div className="checkout-summary">
      <h2 className="checkout-title">Order Summary</h2>
      <div className="checkout-products">
        {cartItems.map((item, index) => (
          <div key={index}>
            <CheckoutSummaryItem product={item} />
          </div>
        ))}
      </div>

      <hr />

      <div className="checkout-row">
        <span>Subtotal</span>
        <span>{checkoutSummary.subtotal}</span>
      </div>

      <div className="checkout-row">
        <span>Shipping</span>
        <span className="free-text">Free</span>
      </div>

      <div className="checkout-row">
        <span>Estimated Tax</span>
        <span>&#8377; {checkoutSummary.tax}</span>
      </div>

      <div className="checkout-row">
        <span>Discount</span>
        <span>&#8377; {checkoutSummary.discount}</span>
      </div>

      <div className="checkout-total">
        <span>Total</span>
        <span>&#8377; {checkoutSummary.total}</span>
      </div>

      <button className="checkout-button" onClick={() => navigate("/payment")}>
        Finalize Order
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="checkout-features">
        <div className="feature">
          <i className="fa-solid fa-shield-halved"></i>
          <span>SECURE</span>
        </div>

        <div className="feature">
          <i className="fa-solid fa-truck"></i>
          <span>INSURED</span>
        </div>

        <div className="feature">
          <i className="fa-regular fa-star"></i>
          <span>WARRANTY</span>
        </div>
      </div>
    </div>
  );
}

export default CheckOutSummary;
