import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import {useWishlistContext} from "../context/WishlistContext";


function AudioProductCard({ product }) {
  const {addAndremove, isWishlistItem} = useWishlistContext();
  const { addToCart } = useCartContext();

  const isWishlisted = isWishlistItem(product.id);


  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/viewproduct/${id}`);
  };

  return (
    <div className="card audio-card">
      <div className="audio-card-div">
        <img
          src={`http://127.0.0.1:8000${product.thumbnail}`}
          className="audio-card-img card-img-top"
          alt="img"
        />
        <button className="wish-btn" onClick={() => addAndremove(product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
        <button className="quick-add" onClick={() => addToCart(product.id, 1)}>
          Quick Add
        </button>
      </div>
      <div className="card-body">
        <div className="card-details mb-2">
          <div className="product-info">
            <h5 className="card-title product-name">{product.name}</h5>
            <p className="card-text product-description">
              {product.short_description}
            </p>
            <p className="product-price">&#8377; {product.price}</p>
            <button
              className="view-details-btn"
              onClick={() => handleNavigate(product.id)}
            >
              View Details <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioProductCard;
