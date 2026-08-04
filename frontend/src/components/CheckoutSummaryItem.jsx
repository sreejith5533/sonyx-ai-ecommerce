function CheckoutSummaryItem({ product}) {
  return (
    <div className="checkout-product">
      <img
        src={`http://127.0.0.1:8000${product.product.thumbnail}`}
        alt="img"
        className="checkout-product-image"
      />

      <div className="checkout-product-details">
        <h5>{product.product.name}</h5>
        <p>{product.product.short_description.slice(0, 40)}</p>
        <h4>&#8377; {product.product.price}</h4>
      </div>
    </div>
  );
}


export default CheckoutSummaryItem