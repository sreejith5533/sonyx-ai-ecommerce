import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";

function GamingProductCard({ product }) {
  const {addAndremove, isWishlistItem} = useWishlistContext();

  const isWishlisted = isWishlistItem(product.id);
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const handleNavigate = (id) => {
    navigate(`/viewproduct/${id}`);
  };

  return (
    <div className="card gamingcard">
      <div className="gamingcard-img-div">
        <img
          className="card-img-top gamingcard-img"
          src={`http://127.0.0.1:8000${product?.thumbnail}`}
          alt="Card image cap"
        />
        <button className="wish-btn" onClick={() => addAndremove(product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
      </div>
      <div className="card-body gamingcard-body">
        <h5 className="card-title gamingcard-title">{product?.name}</h5>
        <p className="laptop-price">&#8377; {product.price}</p>
        <p className="card-text gamingcard-description">
          {product?.short_description}
        </p>
        <div className="buttons-div">
          <button className="cart-btn" onClick={() => addToCart(product.id)}>
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button className="details-btn" onClick={() => handleNavigate(product.id)}>
            View Details <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamingProductCard;
