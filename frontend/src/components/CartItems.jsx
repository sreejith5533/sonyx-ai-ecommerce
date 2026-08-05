import Counter from "./Counter";
import useCart from "../hooks/useCart";
import { useCartContext } from "../context/CartContext";

function CartItems({ cartItem }) {
  const {removefromCart} = useCartContext()

  console.log(cartItem);
  return (
    <div className="row">
      {cartItem.map((item) => (
        <div className="cart-items-div card mb-3" key={item.id}>
          <div className="row g-3">
            <div className="col-12 col-lg-3">
              <div className="cart-img-div">
                <img
                  className="cart-img"
                  src={item.product.thumbnail}
                  alt="cart-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="cart-details">
                <div className="row mb-4">
                  <div className="col-8">
                    <div className="leftc-content">
                      <p className="cart-item-name">{item.product.name}</p>
                      <p className="cart-item-description">
                        {item.product.short_description}
                      </p>
                      <div className="cart-item-specs">
                        <div className="in-stock">
                          <i class="fa-regular fa-circle-check"></i>
                          <span>
                            {item.product.stock > 0
                              ? "In Stock"
                              : "Out of Stock"}
                          </span>
                        </div>
                        <div className="warranty">
                          <i class="fa-regular fa-circle-check"></i>
                          <span>Quantity: {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="right-content">
                      <p className="cart-item-price">
                        &#8377; {item.product.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row-two">
                      <Counter count={item.quantity} product={item.product}  />
                      <button className="remove-from-cart-btn" onClick={() => removefromCart(item.product.id)}>
                        <i class="fa-solid fa-trash"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
