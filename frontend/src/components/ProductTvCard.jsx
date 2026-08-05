import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import {useCartContext} from "../context/CartContext";
import {useWishlistContext} from "../context/WishlistContext";



function ProductTvCard({ product }) {
  const {addToCart} = useCartContext();
  const {addAndremove, isWishlistItem} = useWishlistContext();

  const navigate = useNavigate();
  

  const isWishlisted = isWishlistItem(product.id);

  const handleNavigate = (id)=>{
    navigate(`/viewproduct/${id}`);
  }


  console.log(product);
  console.log(product.thumbnail);
  console.log(import.meta.env.VITE_MEDIA_URL);

  return (
    <div className="card tv-card h-100">
      <div className="card-img-div television-img-div">
        {product.section.some((item) => item.slug === "tv-new-arrivals") && (
          <span className="new-arrival">New Arrival</span>
        )}
        <div className="image-overlay-div">
          <div>
            <h2 className="screen-size-overlay">
              {
                product.specification.find((item) => item.name === "screensize")
                  ?.value
              }
            </h2>
            <p className="screen-type-overlay">
              {
                product.specification.find((item) => item.name === "display")
                  ?.value
              }
            </p>
          </div>
          <hr className="hr-line" />
          <div className="resolution-overlay">
            <h2 className="resolution-overlay-text">
              {
                product.specification.find((item) => item.name === "resolution")
                  ?.value
              }
            </h2>
            <p className="resolution-overlay-name">Resolution</p>
          </div>
          <p className="operating-system">
            {
              product.specification.find(
                (item) => item.name === "operating-system",
              )?.value
            }
          </p>
          <hr className="hr-line" />
          <div>
            <h2 className="refresh-rate-text">
              {
                product.specification.find((item) => item.name === "refresh-rate")
                  ?.value
              }
            </h2>
            <p className="refresh-rate-name">Refresh Rate</p>
          </div>
        </div>
        
        <img
          className="card-img-top tv-card-img"
          src={`${import.meta.env.VITE_MEDIA_URL}${product.thumbnail}`}
          alt="Card image cap"
        />
        <button className="wish-btn" onClick={()=>addAndremove(product.id)}>
          <i className={`fa-solid fa-heart wishlist-icon ${isWishlisted ? "active" : ""}`}></i>
        </button>
        <button className="btn add-to-cart-btn" onClick={()=>addToCart(product.id,1)}>Add to Cart</button>
      </div>
      <div className="card-body television-card-body">
        <h5 className="card-title tv-card-title">{product.name}</h5>
        <div className="specs-div">
          <span className="specs">QD-OLED</span>
          <span className="specs">XR HDR</span>
        </div>
        <p className="card-text tv-card-text">{product.short_description}</p>
        <p className="tv-card-price">&#8377; {product.price}</p>
        <button className="btn view-details-btn" onClick={()=>handleNavigate(product.id)}>View Details</button>
      </div>
    </div>
  );
}

export default ProductTvCard;
