function WishlistStats({wishlistCount}){
  return(
    <div className="card">
      <div className="card-body">
        <i className="fa-regular fa-heart"></i>
        <h5 className="card-title stats-heading">Wishlist</h5>
        <p className="card-text stats-count">{wishlistCount || 0}</p>
      </div>
    </div>
  )
}

export default WishlistStats