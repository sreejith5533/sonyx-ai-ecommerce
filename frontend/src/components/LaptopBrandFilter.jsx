function LaptopBrandFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="brand-filter-container">
      <h4 className="brand-filter-title">Brand</h4>
      <div className="series-div mt-2">
        <div className="brand-choice-item">
          <input
            type="checkbox"
            id="apple"
            name="apple"
            value="apple"
            checked={filters.brand.includes("apple")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="apple">Apple</label>
        </div>
        <div className="brand-choice-item">
          <input
            type="checkbox"
            id="asus"
            name="asus"
            value="asus"
            checked={filters.brand.includes("asus")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="asus">ASUS</label>
        </div>
        <div className="brand-choice-item">
          <input
            type="checkbox"
            id="acer"
            name="acer"
            value="acer"
            checked={filters.brand.includes("acer")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="acer">Acer</label>
        </div>
        <div className="brand-choice-item">
          <input
            type="checkbox"
            id="hp"
            name="hp"
            value="hp"
            checked={filters.brand.includes("hp")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="hp">HP</label>
        </div>
        <div className="brand-choice-item">
          <input
            type="checkbox"
            id="dell"
            name="dell"
            value="dell"
            checked={filters.brand.includes("dell")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="hp">Dell</label>
        </div>
        <div className="brand-choice-item">
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
          <label htmlFor="hp">Razer</label>
        </div>
      </div>
    </div>
  );
}

export default LaptopBrandFilter;
