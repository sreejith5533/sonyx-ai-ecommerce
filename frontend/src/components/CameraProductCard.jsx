import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
function CameraProductCard({ product }) {
  const {addAndremove, isWishlistItem} = useWishlistContext();
  const isWishlisted = isWishlistItem(product.id);
  
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const handleNavigate = (id) => {
    navigate(`/viewproduct/${id}`);
  };



  return (
    <div className="card camera-card-container">
      <div className="camera-card">
        <button className="btn camera-add-to-cart" onClick={() => addToCart(product.id)}>Add to Cart</button>
        <img
          className="camera-card-img"
          src={`http://127.0.0.1:8000${product.thumbnail}`}
          alt="img"
        />
        <button className="wish-btn" onClick={() => addAndremove(product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
      </div>
      <div className="card-body camera-card">
        <h5 className="card-title camera-card-title">{product.name}</h5>
        <p className="card-text camera-card-description mt-2">
          {product.short_description}
        </p>
        <div className="camera-price-div">
          <span className="camera-card-price">&#8377; {product.price}</span>
        </div>

        <button className="camera-details-btn" onClick={() => handleNavigate(product.id)}>
          View Details <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default CameraProductCard;
