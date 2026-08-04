import {useState} from "react";
import PriceRange from "./PriceRange";
import GamingcategoryFilter from "./GamingcategoryFilter";
import GamingConnectivity from "./GamingConnectivity";
import GamingBrandFilter from "./GamingBrandFilter";

function GamingFilters({filters , setFilters,  updateCheckboxFilter}){
  

  const clearFilters = ()=>{

    setFilters({
      category : [],
      connectivity : [],
      brand : [],
      price : 50000
    })
  }


  return(
    <div className="gaming-specification-div">
      <PriceRange min={2000} max={400000} price={filters.price} setPrice={(price) => setFilters((prev) => ({ ...prev, price }))}/>
      <GamingcategoryFilter filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <GamingConnectivity filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <GamingBrandFilter filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <div className="apply-filter-btn-div">
        <button className="clear-filters-btn" onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  )
}



export default GamingFilters