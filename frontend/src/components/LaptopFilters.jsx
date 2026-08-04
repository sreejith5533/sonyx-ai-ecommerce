import LapStorageFilter from "./LapStorageFilter";
import Processor from "./Processor";
import Graphics from "./Graphics";

import LaptopBrandFilter from "./LaptopBrandFilter";
import PriceRange from "./PriceRange";
import LaptopRamFilter from "./LaptopRamFilter";
function LaptopFilters({ updateCheckboxFilter, filters, setFilters }) {

  const clearFilters = () => {
    setFilters({
      brand: [],
      ram: [],
      storage : [],
      processor: [],
      graphics: [],
      price: 50000,
    });
  };


  return (
    <div className="filter-container">
      <div className="filter-options">
        <h4 className="filter-title">Filters</h4>
        <PriceRange min={10000} max={500000} price={filters.price} setPrice={(price) => setFilters((prev) => ({ ...prev, price }))} />
        <LaptopBrandFilter filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
        <LaptopRamFilter filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
        <LapStorageFilter filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
        <Processor filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
        <Graphics filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
        <button className="clear-filters-btn" onClick={clearFilters}>
          <p>Clear Filters</p>
        </button>
      </div>
    </div>
  );
}

export default LaptopFilters;
