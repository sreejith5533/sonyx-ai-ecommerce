import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/axios";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {

    const getOrder = async () => {
      try {
        const response = await API.get(`/orders/${id}/`);
        setOrder(response.data);
      } catch (err) {
        console.log(err.response?.data);
      }
    };

    getOrder();
  }, [id]);

  if (!order) {
    return <h3>Loading...</h3>;
  }

  const date = new Date(order.created_at);

  const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <div className="container py-5">

  
      <div className="mb-4 orders-details-header">
        <h2 className="orders-detail-heading">Order Details :</h2>
        <h2 className="orders-detail-subheading">Order #{order.razorpay_order_id.slice(6)}</h2>

        <p className="placed-text">Placed on {formattedDate}</p>
      </div>



      <div className="card mb-4">
        <div className="card-header">
          <h5>Payment Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Payment Method :</strong>{" "}
            {order.payment_method}
          </p>

          <p>
            <strong>Payment Status :</strong>{" "}
            {order.payment_status}
          </p>
        </div>
      </div>



      <div className="card mb-4">
        <div className="card-header">
          <h5>Delivery Information</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Status :</strong>{" "}
            {order.delivery_status}
          </p>

          <p>
            <strong>Delivered On :</strong>{" "}
            {order.delivered_at || "Not Delivered Yet"}
          </p>
        </div>
      </div>

  
      <div className="card mb-4">

        <div className="card-header">
          <h5>Ordered Products</h5>
        </div>

        <div className="card-body">

          {order.items.map(item => (

            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >

              <div className="d-flex align-items-center">

                <img
                  src={item.product.thumbnail}
                  alt={item.product.name}
                  width="90"
                />

                <div className="ms-3">

                  <h6>{item.product.name}</h6>

                  <p className="mb-1">
                    Qty : {item.quantity}
                  </p>

                  <p>₹ {item.price}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>



      <div className="card">

        <div className="card-header">
          <h5>Order Summary</h5>
        </div>

        <div className="card-body">

          <div className="d-flex justify-content-between">
            <span>Total Items</span>
            <span>{order.items.length}</span>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <strong>Grand Total</strong>
            <strong>₹ {order.total_amount}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;