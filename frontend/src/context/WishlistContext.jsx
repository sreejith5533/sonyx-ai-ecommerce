import { useContext, createContext, useState, useEffect } from "react";
import API from "../services/axios";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const getWishlist = async () => {
    try {
      const response = await API.get("/wishlist/wishlistitems/");
      setWishlist(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token){
      getWishlist();
    }
  }, []);

  const isWishlistItem = (product_id) => {
    return wishlist.some((item) => item.product.id === product_id);
  };

  const addAndremove = (product_id) => {
    if (isWishlistItem(product_id)) {
      removeFromWishList(product_id);
    } else {
      addToWishList(product_id);
    }
  };

  const addToWishList = async (product_id) => {
    try {
      const response = await API.post("/wishlist/add/", {
        product_id: product_id,
      });
      await getWishlist();
      return response.data;
    } catch (err) {
      console.log(err);
    }

    getWishlist();
  };

  const removeFromWishList = async (product_id) => {
    try {
      const response = await API.delete("/wishlist/remove/", {
        data: { product_id: product_id },
      });
      await getWishlist();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishList,
        removeFromWishList,
        addAndremove,
        isWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = () => useContext(WishlistContext);
