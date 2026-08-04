import { useNavigate } from "react-router-dom";
import API from "../services/axios";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
function AccessoriesProductCard({ product }) {
  const {addAndremove, isWishlistItem} = useWishlistContext();
  const isWishlisted = isWishlistItem(product.id);
  
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const handleNavigate = (id) => {
    navigate(`/viewproduct/${id}`);
  };



  return (
    <div className="card accessories-product-card">
      <div className="accessories-img-div">
        <img
          className="accessories-product-img"
          src={`http://127.0.0.1:8000${product?.thumbnail}`}
          alt="accessories-img"
        />
        <button className="wish-btn" onClick={() => addAndremove(product.id)}>
            <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
      </div>
      <div className="card-body accessories-product-card-body mt-3">
        <div className="price-name-div">
          <h5 className="card-title accessories-product-name">
            {product.name}
          </h5>
          <p className="accessories-product-price">&#8377; {product.price}</p>
        </div>
        <div className="specs-div">
          <span className="specs-name">MAGNESIUM ALLOY</span>
          <span className="specs-model">NP-FZ100 X2</span>
        </div>
        <p className="card-text accessories-product-description">
          {product.short_description}
        </p>
        <div className="btn-div">
          <button className="accessories-add-to-cart" onClick={()=>addToCart(product.id)}>Quick Add</button>
          <button
            className="view-product"
            onClick={() => handleNavigate(product.id)}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesProductCard;
