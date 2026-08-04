function AddressStats({addressCount}){
  return(
    <div className="card">
      <div className="card-body">
        <i className="fa-solid fa-location-dot"></i>
        <h5 className="card-title stats-heading">Address</h5>
        <p className="card-text stats-count">{addressCount || 0}</p>
      </div>  
    </div>
  )
}

export default AddressStats