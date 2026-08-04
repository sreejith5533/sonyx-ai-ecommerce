function MyAddressHeader(){
  return(
    <div className="row">
      <div className="col-12">
        <div className="my-address-header-div">
          <h2 className="my-address-header">My Addresses</h2>
          <button className="add-new-address-btn" type="button" data-bs-toggle="modal" data-bs-target="#myModal" >
            <i className="fa-solid fa-plus"></i>
            <span>Add New Address</span>
          </button>
        </div>
      </div>
    </div>
  )
}


export default MyAddressHeader