import {useContext, createContext, useState, useEffect } from "react";
import API from "../services/axios";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await API.get("/cart/cartitems/");
      setCartItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await API.post("/cart/add/", {
        product_id: productId,
        quantity: quantity,
      });
      await getCartItems();
      navigate("/cart");
      return response.data;
    } catch (err) {
      console.log(err);
    }

    getCartItems();
  }

  const removefromCart = async (productId) => {
    try {
      const response = await API.delete("/cart/remove/", {
        data: { product_id: productId }
      })
      await getCartItems()
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  const updateCart = async (productId, quantity) => {
    try{
      const response = await API.put("/cart/update/",{
        product_id: productId,
        quantity: quantity
      })
      await getCartItems()
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  const clearCart = async () => {
    try {
      const response = await API.delete("/cart/clear/");
      await getCartItems();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  



  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getCartItems,
        addToCart,
        removefromCart,
        updateCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = () => useContext(CartContext);