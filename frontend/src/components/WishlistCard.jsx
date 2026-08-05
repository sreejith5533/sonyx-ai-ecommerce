import { useWishlistContext } from "../context/WishlistContext";

function Wishlist({ product }) {
  const {addAndremove, isWishlistItem} = useWishlistContext();

  const isWishlisted = isWishlistItem(product.product.id);
  return (
    <div className="wishlist-card">
      <div className="wishlist-img-div">
        <button className="wishlist-remove-btn" onClick={() => addAndremove(product.product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
        <img
          src={`${import.meta.env.VITE_API_URL} ${product.product.thumbnail}`}
          alt="img-div"
          className="wishlist-img"
        />
      </div>
      <div className="wishlist-content">
        <div>
          <h4 className="wishlist-product-name">{product.product.name}</h4>
          <p className="wishlist-product-description">
            {product.product.short_description}
          </p>
        </div>
        <p className="wishlist-product-price">&#8377; {product.product.price}</p>
      </div>
    </div>
  );
}

export default Wishlist;
