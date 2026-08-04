import API from "../services/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function useCart (){
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const getCartItems = async () => {
    try {
      const response = await API.get("/cart/cartitems");
      setCartItems(response.data);
    } catch (err) {
      console.log(err.response.status);
      console.log(err.response.data);
    }
  };


  const addToCart = async (productId,quantity=1)=>{
    try{
      const response = await API.post("/cart/add/",{
        product_id:productId,
        quantity:quantity
      })
      return response.data
    }catch(err){
      console.log(err)
    }
  }

  const removefromCart = async (productId)=>{
    try{
      const response = await API.delete("/cart/remove/",{
        data:{product_id:productId}
      })
      return response.data
    }catch(err){
      console.log(err)      
    }
  }
  
  return {addToCart,removefromCart,getCartItems}
}


export default useCart