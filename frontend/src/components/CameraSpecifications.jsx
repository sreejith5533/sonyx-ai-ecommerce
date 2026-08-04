import CameraTypeFilter from "./CameraTypeFilter";
import VidioRecordingRange from "./VidioRecordingRange";
import CameraResolutionFilter from "./CameraResolutionFilter";
import CameraBrandFilter from "./CameraBrandFilter";
import PriceRange from "./PriceRange";
import { useState } from "react";
function CameraSpecifications({
  setFilters,
  setIsFilterApplied,
  filters,
  updateCheckboxFilter,
}) {
  const clearFilters = () => {
    setFilters({
      cameraType: [],
      brand: [],
      videoResolution: [],
      cameraResolution: [],
      price: 50000,
    });
  };
  return (
    <div className="camera-specifications-section">
      <h4 className="camera-specifications-title">Filter by</h4>
      <hr className="hr-line" />
      <PriceRange
        min={10000}
        max={500000}
        price={filters.price}
        setPrice={(price) => setFilters((prev) => ({ ...prev, price }))}
      />
      <CameraTypeFilter
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <CameraBrandFilter
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <VidioRecordingRange
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <CameraResolutionFilter
        filters={filters}
        updateCheckboxFilter={updateCheckboxFilter}
      />
      <button
        className="clear-filters-button"
        onClick={() => {
          clearFilters();
          setIsFilterApplied(false);
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default CameraSpecifications;
