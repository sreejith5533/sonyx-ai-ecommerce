function CartItemsStats({ cartCount }) {
  return (
    <div className="cart-items-stats card">
      <div className="cart-items-stats-body card-body">
        <i className="fa-solid fa-cart-shopping"></i>
        <h5 className="cart-items-stats-title card-title stats-heading">
          Cart Items
        </h5>
        <p className="cart-items-stats-quantity stats-count">{cartCount || 0}</p>
      </div>
    </div>
  );
}

export default CartItemsStats;
