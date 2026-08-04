function AccessoriesColor({ filters, updateCheckboxFilter }) {
  return (
    <div className="accessories-color-filter mt-3">
      <div className="accessories-color-filter-header mb-2">
        <h4 className="accessories-color-filter-title">Color</h4>
        <p className="accessories-color-filter-description">Refine by color</p>
      </div>
      <div className="accessories-color-filter-checkboxes">
        <div className="accessories-color-checkbox">
          <input
            type="checkbox"
            id="black"
            name="accessories"
            value="black"
            checked={filters.color.includes("black")}
            onChange={(e) =>
              updateCheckboxFilter("color", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="black">Black</label>
        </div>
        <div className="accessories-color-checkbox">
          <input
            type="checkbox"
            id="white"
            name="accessories"
            value="white"
            checked={filters.color.includes("white")}
            onChange={(e) =>
              updateCheckboxFilter("color", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="white">White</label>
        </div>
        <div className="accessories-color-checkbox">
          <input
            type="checkbox"
            id="gray"
            name="accessories"
            value="gray"
            checked={filters.color.includes("gray")}
            onChange={(e) =>
              updateCheckboxFilter("color", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="gray">Gray</label>
        </div>
        <div className="accessories-color-checkbox">
          <input
            type="checkbox"
            id="blue"
            name="accessories"
            value="blue"
            checked={filters.color.includes("blue")}
            onChange={(e) =>
              updateCheckboxFilter("color", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="accessories-color-checkbox">
          <input
            type="checkbox"
            id="red"
            name="accessories"
            value="red"
            checked={filters.color.includes("red")}
            onChange={(e) =>
              updateCheckboxFilter("color", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="red">Red</label>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesColor;
