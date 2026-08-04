function OrdersStats({orderCount}){
  return(
    <div className="card">
      <div className="card-body">
        <i className="fa-solid fa-truck-fast"></i>
        <h5 className="card-title stats-heading">Orders</h5>
        <p className="card-text stats-count">{orderCount || 0}</p>
      </div>
    </div>
  )
}


export default OrdersStats