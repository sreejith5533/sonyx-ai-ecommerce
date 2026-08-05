import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import API from "../services/axios";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
function LaptopProductCard({ product }) {
  const { addToCart } = useCartContext();

  const {addAndremove, isWishlistItem} = useWishlistContext();
  const isWishlisted = isWishlistItem(product.id);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/viewproduct/${id}`);
  };

  return (
    <div className="card mt-3 laptop-card">
      <div className="laptop-card-img-div">
        <button className="wish-btn" onClick={() => addAndremove(product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
        <img
          src={`${import.meta.env.VITE_API_URL}${product?.thumbnail}`}
          className="card-img-top laptop-card-img"
          alt="laptop-img"
        />
      </div>
      <div className="card-body laptop-card-body">
        <h5 className="card-title laptop-title">{product.name}</h5>
        <p className="laptop-price">&#8377; {product.price}</p>
        <div className="mt-3 laptop-specs-div">
          <ul className="lap-specs">
            {product.specification &&
              product.specification.map((spec, index) => (
                <li key={index}>{spec.value}</li>
              ))}
          </ul>
        </div>
        <div className="buttons-div">
          <button className="cart-btn" onClick={()=>addToCart(product.id, 1)}>
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button
            className="details-btn"
            onClick={() => handleNavigate(product.id)}
          >
            View Details <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaptopProductCard;
