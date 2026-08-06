import {useState} from "react";

function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  return (
    <div className="payment-methods">
      <div className="payment-methods-list">
        <div className={`payment-method-card ${selectedMethod === "card" ? "active" : ""}`} onClick={() => setSelectedMethod("card")}>
          <img
            src="https://img.icons8.com/?size=100&id=57arHgK3Izco&format=png&color=000000"
            alt="Mastercard"
            loading="lazy"
          />
          <div className="payment-method-card-body">
            <p className="payment-method-card-title">CREDIT / DEBIT CARD</p>
            <small>Secure Global Processing</small>
          </div>
        </div>
        <div className={`payment-method-card ${selectedMethod === "upi" ? "active" : ""}`} onClick={() => setSelectedMethod("upi")}>
          <img
            src="https://img.icons8.com/?size=100&id=117268&format=png&color=000000"
            alt="Mastercard"
            loading="lazy"
          />
          <div className="payment-method-card-body">
            <p className="payment-method-card-title">UPI / QR CODE</p>
            <small>Instant Mobile Verification</small>
          </div>
        </div>
        <div className={`payment-method-card ${selectedMethod === "netbanking" ? "active" : ""}`} onClick={() => setSelectedMethod("netbanking")}>
          <img
            src="https://img.icons8.com/?size=100&id=ynRo4ryFLrim&format=png&color=000000"
            alt="PayPal"
            loading="lazy"
          />
          <div className="payment-method-card-body">
            <p className="payment-method-card-title">NETBANKING</p>
            <small>Direct Institutional Transfer</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
