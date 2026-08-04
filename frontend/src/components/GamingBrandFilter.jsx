function GamingBrandFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="gaming-brand-section mt-3 mb-3">
      <div className="gaming-brand-title-div mb-3">
        <h3 className="gaming-brand-title">Brand</h3>
      </div>
      <div className="gaming-brand-checkbox-container">
        <input
          type="checkbox"
          id="asus"
          name="gaming"
          value="asus"
          checked={filters.brand.includes("asus")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="asus">Asus</label>
      </div>
      <div className="gaming-brand-checkbox-container">
        <input
          type="checkbox"
          id="sony"
          name="sony"
          value="sony"
          checked={filters.brand.includes("sony")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="sony">Sony</label>
      </div>
      <div className="gaming-brand-checkbox-container">
        <input
          type="checkbox"
          id="razer"
          name="razer"
          value="razer"
          checked={filters.brand.includes("razer")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="razer">Razer</label>
      </div>
      <div className="gaming-brand-checkbox-container">
        <input
          type="checkbox"
          id="logitech"
          name="logitech"
          value="logitech"
          checked={filters.brand.includes("logitech")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="logitech">Logitech</label>
      </div>
      <div className="gaming-brand-checkbox-container">
        <input
          type="checkbox"
          id="lg"
          name="lg"
          value="lg"
          checked={filters.brand.includes("lg")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="lg">LG</label>
      </div>
    </div>
  );
}

export default GamingBrandFilter;
