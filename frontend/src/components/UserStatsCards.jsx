import CartItems from "./CartItems";
import OrdersStats from "./OrdersStats";
import WishlistStats from "./WishlistStats";
import AddressStats from "./AddressStats";
import CartItemsStats from "./CartItemsStats";
import API from "../services/axios";
import { useEffect, useState } from "react";

function UserStatsCards() {
  const [statsCount, setStatsCount] = useState({
    orderCount: 0,
    wishlistCount: 0,
    addressCount: 0,
    cartCount: 0,
  });

  const fetchStatsCount = async () => {
    try {
      const response = await API.get("/account/stats/");
      setStatsCount((prev) => ({
        ...prev,
        orderCount: response.data.orderCount,
        wishlistCount: response.data.wishlistCount,
        addressCount: response.data.addressCount,
        cartCount: response.data.cartCount,
      }));
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };

  useEffect(() => {
    fetchStatsCount();
  }, []);

  return (
    <div className="user-stats-cards row">
      <div className="col-md-3 stats-column">
        <OrdersStats orderCount={statsCount.orderCount} />
      </div>
      <div className="col-md-3 stats-column">
        <WishlistStats wishlistCount={statsCount.wishlistCount} />
      </div>
      <div className="col-md-3 stats-column">
        <AddressStats addressCount={statsCount.addressCount} />
      </div>
      <div className="col-md-3 stats-column">
        <CartItemsStats cartCount={statsCount.cartCount} />
      </div>
    </div>
  );
}

export default UserStatsCards;
