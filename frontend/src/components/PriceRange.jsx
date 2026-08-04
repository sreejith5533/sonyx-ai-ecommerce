import { useState } from "react";

function PriceRange({min,max,price,setPrice}){


  return(
    <div className="price-range-container mb-3">
      <p className="price-range-title">Price Range</p>
      <hr className="hr-line" />
      <input className="price-range" type="range" min={min} max={max} value={price} onChange={(e)=>setPrice(e.target.value)} />
      <div className="price-range-div">
        <span>Min &#8377; {min}</span>
        <span className="price-range-value">&#8377; {price}</span>
        <span>Max &#8377; {max}</span>
      </div>  

    </div>
  ) 
}


export default PriceRange;