import AudioCategory from "./AudioCategory";
import BatteryLifeAudio from "./BatteryLifeAudio";
import AudioBrand from "./AudioBrand";
import PriceRange from "./PriceRange";
import { useState } from "react";

function AudioSpecifications({ filters, updateCheckboxFilter,setFilters  }) {
  const clearFilters = () => {
    setIsFilterApplied(false);
    setFilters({
      category: "",
      batterylife: "",
      brand: "",
      price: "",
      search: "",
    });
  };

  return (
    <div className="audio-specifications-div">
      <PriceRange
        min={1000}
        max={200000}
        price={filters.price}
        setPrice={(price) => setFilters((prev) => ({ ...prev, price }))}
      />
      <AudioCategory
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <BatteryLifeAudio
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <AudioBrand
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <div className="audio-specifications-btn-div">
        <button className="clear-filters-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default AudioSpecifications;
