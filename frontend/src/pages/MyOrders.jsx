import OrderItem from "../components/OrderItem";
import OrdersHeader from "../components/OrdersHeader";
import API from "../services/axios";
import { useEffect, useState } from "react";

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);

  const getMyOrders = async () => {
    try {
      const response = await API.get("/orders/myorders/");
      setMyOrders(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };


  useEffect(() => {
    getMyOrders();
  }, []);
  
  console.log(myOrders);
  return (
    <div>
      <OrdersHeader />
      <div className="row g-3 my-orders-row">
        {myOrders.map((order, index) => (
          <div className="col-12" key={index}>
            <OrderItem order={order} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
