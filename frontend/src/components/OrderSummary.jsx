import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import API from "../services/axios";
import {useCartContext} from "../context/CartContext";

function OrderSummary() {
  const {updateCart} = useCartContext();
  const [cartSummary,setCartSummary] = useState({
    "subtotal": 0,
    "tax": 0,
    "shipping": 0,
    "discount": 0,
    "total": 0
  });
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  }

  useEffect(() => {
    const getCartSummary = async () => {
      try{
        const response = await API.get("/cart/summary/");
        console.log(response.data)
        setCartSummary(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getCartSummary();
  },[updateCart])


  




  return (
    <div className="order-summary">
      <h3 className="summary-title">Order Summary</h3>

      <div className="summary-row">
        <span className="category-text">Subtotal</span>
        <span className="amount">&#8377;{cartSummary.subtotal}</span>
      </div>

      <div className="summary-row">
        <span className="category-text">Tax (Estimated)</span>
        <span className="amount">&#8377;{cartSummary.tax}</span>
      </div>

      <div className="summary-row">
        <span className="category-text">Shipping</span>
        <span className="amount">{cartSummary.shipping}</span>
      </div>

      {cartSummary.discount > 0 && (
        <div className="summary-row">
          <span className="category-text">Discount</span>
          <span className="amount">&#8377;{cartSummary.discount}</span>
        </div>
      )}

      <hr />

      <div className="summary-row total-row">
        <span>Total</span>
        <span>&#8377;{cartSummary.total}</span>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        <i className="fa-solid fa-lock"></i>
        <span>Secure Checkout</span>
      </button>

      <div className="info-card">
        <i className="fa-solid fa-shield-halved info-icon"></i>

        <div>
          <h5>SONYX Warranty Included</h5>
          <p>
            Protect your precision hardware with 24 months of coverage.
          </p>
        </div>
      </div>

      <div className="info-card">
        <i className="fa-solid fa-truck-fast info-icon"></i>

        <div>
          <h5>Insured Shipping</h5>
          <p>
            Dispatched within 24 hours with full tracking and signature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;