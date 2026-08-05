import { useNavigate } from "react-router-dom";

function OrderItem({ order }) {
  const date = new Date(order.created_at);
  const navigate = useNavigate();

  const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;

  const handleNavigate = (id)=>{
    navigate(`/user-profile/orders/${id}`);
  }

  return (
    <div className="order-card">
      {/* Header */}
      <div className="order-header">
        <div>
          <h4>Order #{order.razorpay_order_id.slice(6)}</h4>
          <p>Placed on {formattedDate}</p>
        </div>

        <div className="order-header-right">
          <span className={`payment-status ${order.payment_status}`}>
            {order.payment_status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Order Items */}
      <div className="order-items">
        {order.items.map((item) => (
          <div className="order-product-card" key={item.id}>
            <div className="order-product-left">
              <img
                className="order-product-image"
                src={item.product.thumbnail}
                alt={item.product.name}
              />

              <div className="order-product-info">
                <h5>{item.product.name}</h5>

                <p>
                  Qty : <strong>{item.quantity}</strong>
                </p>

                <p>₹ {item.price}</p>
              </div>
            </div>

            <div className="order-product-right">
              <span className="delivery-status">
                {order.delivery_status.replaceAll("_", " ").toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="order-footer">
        <div>
          <p>
            <strong>Total Items:</strong> {order.items.length}
          </p>

          <p>
            <strong>Payment:</strong> {order.payment_method}
          </p>
        </div>

        <div className="order-footer-right">
          <h3>₹ {order.total_amount}</h3>

          <button className="order-details-btn" onClick={()=>handleNavigate(order.id)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;