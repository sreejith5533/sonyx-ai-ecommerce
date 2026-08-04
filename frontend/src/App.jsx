import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import Telivisions from "./pages/Televisions.jsx";
import Audio from "./pages/Audio.jsx";
import Gaming from "./pages/Gaming.jsx";
import Camera from "./pages/Camera.jsx";
import Laptop from "./pages/Laptop.jsx";
import Accessories from "./pages/Accessories.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import WishList from "./pages/Wishlist.jsx";
import ChatWidjet from "./components/ChatWidjet.jsx";
import Payment from "./pages/Payment.jsx";
import Privacy from "./pages/Privacy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProfileLayout from "./components/Layout/ProfileLayout.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import MyAddress from "./pages/MyAddress.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import Logout from "./pages/Logout.jsx";



function App() {
  const location = useLocation();

  const hideChat =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tv" element={<Telivisions />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/viewproduct/:id" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-profile" element={<ProfileLayout />}>
            <Route index element={<MyProfile />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="address" element={<MyAddress />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      {!hideChat && <ChatWidjet />}
    </div>
  );
}

export default App;
