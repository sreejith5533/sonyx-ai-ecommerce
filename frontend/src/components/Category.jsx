function Category({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <div>
        <p className="category-title">Category</p>
        <p className="category-description">Refine by category</p>
      </div>
      <div className="category-div mt-2">
        <div className="accessories-category-item">
          <input
            type="checkbox"
            id="storage"
            value="storage"
            checked={filters.category.includes("storage")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="storage">Storage</label>
        </div>
        <div className="accessories-category-item">
          <input
            type="checkbox"
            id="input-devices"
            value="input-devices"
            checked={filters.category.includes("input-devices")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="input-devices">Input Devices</label>
        </div>
        <div className="accessories-category-item">
          <input
            type="checkbox"
            id="power"
            value="power"
            checked={filters.category.includes("power")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="power">Power</label>
        </div>
        <div className="accessories-category-item">
          <input
            type="checkbox"
            id="cables-adapters"
            value="cables-adapters"
            checked={filters.category.includes("cables-adapters")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="cables-adapters">Cables & Adapters</label>
        </div>
        <div className="accessories-category-item">
          <input
            type="checkbox"
            id="networking"
            value="networking"
            checked={filters.category.includes("networking")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="networking">Networking</label>
        </div>
      </div>
    </div>
  );
}

export default Category;
