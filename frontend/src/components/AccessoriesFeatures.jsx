function AccessoriesFeatures({ filters, updateCheckboxFilter }) {
  return (
    <div className="accessories-features-section mt-3 mb-3">
      <div className="accessories-features-title-div mb-2">
        <h3 className="accessories-features-title">Features</h3>
        <p className="accessories-features-description">Refine by features</p>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="fast-charging"
          name="accessories"
          value="fast-charging"
          checked={filters.features.includes("fast-charging")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="fast-charging">Fast Charging</label>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="noise-cancellation"
          name="accessories"
          value="compact-design"
          checked={filters.features.includes("compact-design")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="compact-design">Compact Design</label>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="rgb-lighting"
          name="accessories"
          value="rgb-lighting"
          checked={filters.features.includes("rgb-lighting")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="rgb-lighting">RGB Lighting</label>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="waterproof"
          name="accessories"
          value="waterproof"
          checked={filters.features.includes("waterproof")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="waterproof">Waterproof</label>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="portable"
          name="accessories"
          value="portable"
          checked={filters.features.includes("portable")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="portable">Portable</label>
      </div>
      <div className="accessories-features-checkbox-container">
        <input
          type="checkbox"
          id="rechargeable"
          name="accessories"
          value="rechargeable"
          checked={filters.features.includes("rechargeable")}
          onChange={(e)=>updateCheckboxFilter(
            "features",
            e.target.value,
            e.target.checked
          )}
        />
        <label htmlFor="rechargeable">Rechargeable</label>
      </div>
    </div>
  );
}

export default AccessoriesFeatures;
