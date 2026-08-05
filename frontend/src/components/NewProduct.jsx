function NewProduct({product}){
  return(
    <div className="card new-product">
      <button className="like-btn">
        <i className="fa-regular fa-heart"></i>
      </button>
      <div className="card-img-top new-product-img-div">
        <img className="new-product-img" src={`${import.meta.env.VITE_MEDIA_URL}${product.thumbnail}`} alt="img" />
      </div>
      <div className="card-body">
        <h5 className="card-title new-product-title">{product.subcategory.category.name}</h5>
        <p className="card-text product-category">{product.name}</p>
        <span className="product-price">&#8377; {product.price}</span>
      </div>
    </div>
  )
}


export default NewProduct;