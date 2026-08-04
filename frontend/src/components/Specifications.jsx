import PriceRange from "./PriceRange";
import ScreenSize from "./ScreenSize";
import Resolution from "./Resolution";
import { useState } from "react";
import RefreshRate from "./RefreshRate";

function Specifications({ filters, setFilters,updateCheckboxFilter }) {
  
  const clearFilters = ()=>{
    setIsFilterApplied(false);
    setFilters({
      size: "",
      resolution: [],
      refreshRate: "",
      price : 50000
    })
  }

  return (
    <div className="specifications">
      <PriceRange min={5000} max={200000} price={filters.price} setPrice={(price) => setFilters((prev) => ({ ...prev, price }))} />
      <ScreenSize
        filters={filters}
        setFilters={setFilters}
      />
      <Resolution
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <RefreshRate
        filters={filters}
        setFilters={setFilters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <div className="apply-filters-btn-div">
      
        <button className="btn clear-filters-btn" onClick={clearFilters}>
          <i className="fa-solid fa-xmark"></i>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Specifications;
