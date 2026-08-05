import { useCartContext } from "../context/CartContext";
import { useState, useEffect } from "react";
import API from "../services/axios";

function PaymentItems() {
  const { cartItems, updateCart, getCartItems } = useCartContext();
  const [cartSummary, setCartSummary] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const getCartSummary = async () => {
      try {
        const response = await API.get("/cart/summary/");
        console.log(response.data);
        setCartSummary(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCartSummary();
  }, [updateCart]);

  const handlePayment = async () => {
    try {
      const response = await API.post("/payments/create-order/");

      const options = {
        key: response.data.key,
        amount: response.data.amount,
        currency: response.data.currency,
        order_id: response.data.order_id,

        name: "SonyX Ecommerce",
        description: "Order Payment",

        handler: async function (paymentResponse) {
          try {
            const response = await API.post(
              "/payments/verify-payment/",
              paymentResponse,
            );
            console.log(response.data);
            await getCartItems();
          } catch (err) {
            console.log(err.response.data);
            console.log(err.response.status)
          }
        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };

  return (
    <div className="payment-items">
      <h2 className="payment-items-title">Payment Items</h2>
      {cartItems.map((item, index) => (
        <div className="payment-card-item" key={index}>
          <img
            className="payment-card-item-image"
            src={`${import.meta.env.VITE_MEDIA_URL} ${item.product.thumbnail}`}
            alt=""
          />
          <div className="payment-card-item-body">
            <p className="payment-card-item-title">{item.product.name}</p>
            <small className="payment-card-item-text">
              {item.product.short_description}
            </small>
            <p className="payment-card-item-price">
              &#8377; {item.product.price}
            </p>
          </div>
        </div>
      ))}
      <hr />
      <div className="payment-card-item">
        <div className="payment-card-price-body">
          <p className="payment-card-item-title">Total</p>
          <p className="payment-card-item-price">&#8377; {cartSummary.total}</p>
        </div>
      </div>
      <button className="payment-card-item-button" onClick={handlePayment}>
        <p className="payment-card-item-button-text">Pay Now</p>
      </button>
    </div>
  );
}

export default PaymentItems;
