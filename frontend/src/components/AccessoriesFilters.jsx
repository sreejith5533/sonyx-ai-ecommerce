import Category from "./Category";

import AccessoriesBrand from "./AccessoriesBrand";
import AccessoriesConnectivity from "./AccessoriesConnectivity";
import AccessoriesFeatures from "./AccessoriesFeatures";
import AccessoriesColor from "./AccessoriesColor";
import PriceRange from "./PriceRange";

function AccessoriesFilter({filters, setFilters, updateCheckboxFilter}) {
  return (
    <div className="accessories-filter mt-3">
      <div className="accessories-filter-header mb-2">
        <h4 className="accessories-filter-title">Technical Filters</h4>
        <p className="accessories-filter-description ">
          Refine by specifications
        </p>
      </div>
      <PriceRange min={1000} max={50000}  price={filters.price} setPrice={(price) => setFilters((prev) => ({ ...prev, price }))}/>
      <Category filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <AccessoriesBrand filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <AccessoriesConnectivity filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <AccessoriesFeatures filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <AccessoriesColor filters={filters} updateCheckboxFilter={updateCheckboxFilter} />
      <button className="clear-filters-btn mt-3">
        <p>Apply Filters</p>
      </button>
    </div>
  );
}

export default AccessoriesFilter;
