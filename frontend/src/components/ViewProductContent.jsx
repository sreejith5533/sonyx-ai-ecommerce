import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
function ViewProductContent({ product }) {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/cart/${id}`);
  }
  return (
    <div className="product-details-div">
      <h2 className="view-product-title">{product.name}</h2>
      <p className="product-description">
        {product.long_description}
      </p>
      <div className="product-price-counter">
        <p className="product-price">&#8377; {product.price}</p>
        <Counter />
      </div>
      <button className="productdetail-add-btn" onClick={() => addToCart(product.id, 1)}>Add to Cart</button>
    </div>
  );
}

export default ViewProductContent;
