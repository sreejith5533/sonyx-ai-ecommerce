import CheckoutAddresses from "../components/CheckoutAddresses";
import OrderSummary from "../components/OrderSummary";
import CheckOutSummary from "../components/CheckOutSummary";
import "../styles/checkout.css";
function CheckOutPage() {
  return (
    <div>
      <div className="checkout-heading-div">
        <h2>Checkout</h2>
        <p>Complete your purchase </p>
      </div>
      <div className="row checkout-row-div g-4">
        <div className="col-md-8">
          <CheckoutAddresses />
        </div>
        <div className="col-md-4">
          <CheckOutSummary />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
