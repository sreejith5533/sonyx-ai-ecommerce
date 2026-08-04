function GamingcategoryFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="category-filter-div">
      <div className="category-filter-title">
        <h3 className="category-filter-title">Category</h3>
      </div>
      <div className="category-filter-checkbox mt-2">
        <input
          type="checkbox"
          id="consoles"
          name="consoles"
          value="consoles"
          checked={filters.category.includes("consoles")}
          onChange={(e) =>
            updateCheckboxFilter("category", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="consoles">Consoles</label>
      </div>
      <div className="category-filter-checkbox">
        <input
          type="checkbox"
          id="laptops"
          name="laptops"
          value="gaminglaptops"
          checked={filters.category.includes("gaminglaptops")}
          onChange={(e) =>
            updateCheckboxFilter("category", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="laptops">Gaming Laptops</label>
      </div>
      <div className="category-filter-checkbox">
        <input
          type="checkbox"
          id="monitors"
          name="monitors"
          value="monitors"
          checked={filters.category.includes("monitors")}
          onChange={(e) =>
            updateCheckboxFilter("category", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="monitors">Monitors</label>
      </div>
      <div className="category-filter-checkbox">
        <input
          type="checkbox"
          id="keyboards"
          name="keyboards"
          value="gamingkeyboard"
          checked={filters.category.includes("gamingkeyboard")}
          onChange={(e) =>
            updateCheckboxFilter("category", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="keyboards">Keyboards</label>
      </div>
      <div className="category-filter-checkbox">
        <input
          type="checkbox"
          id="controllers"
          name="controllers"
          value="controllers"
          checked={filters.category.includes("controllers")}
          onChange={(e) =>
            updateCheckboxFilter("category", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="controllers">Controllers</label>
      </div>
    </div>
  );
}

export default GamingcategoryFilter;
