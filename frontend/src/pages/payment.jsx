import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods";
import PaymentItems from "../components/PaymentItems"
import '../styles/payment.css'
function Payment(){
  return(
    <div>
      <div className="payment-heading">
        <h2 className="main-heading">SECURE TRANSACTION</h2>
        <p className="payment-paragraph">Enter your payment details to complete your order.</p>
      </div>
      
      <div className="row payment-methods-row">
        <h3 className="payment-methods-title">Payment Methods</h3>
        <div className="col-md-6">
          <PaymentMethods />
        </div>
        <div className="col-md-6">
          <PaymentItems />
        </div>
      </div>
    </div>
  )
}


export default Payment