function AccessoriesBrand({filters,updateCheckboxFilter}) {
  return (
    <div className="brand mt-3 mb-3">
      <div className="brand-header mb-2">
        <p className="brand-title">Brand</p>
        <p className="brand-description">Refine by brand</p>
      </div>
      <div className="brand-div mt-2">
        <div className="brand-choice-div">
          <input
            type="checkbox"
            id="logitech"
            name="logitech"
            value="logitech"
            checked={filters.brand.includes("logitech")}
            onChange={(e)=>updateCheckboxFilter(
              "brand",
              e.target.value,
              e.target.checked
            )}
          />
          <label htmlFor="logitech">Logitech</label>
        </div>
        <div className="brand-choice-div">
          <input type="checkbox" id="hp" name="hp" value="hp" checked={filters.brand.includes("hp")}  onChange={(e)=>updateCheckboxFilter(
            "brand",
            e.target.value,
            e.target.checked
          )}/>
          <label htmlFor="hp">HP</label>
        </div>
        <div className="brand-choice-div">
          <input type="checkbox" id="dell" name="dell" value="dell" checked={filters.brand.includes("dell")} onChange={(e)=>updateCheckboxFilter(
            "brand",
            e.target.value,
            e.target.checked
          )} />
          <label htmlFor="dell">Dell</label>
        </div>
        <div className="brand-choice-div">
          <input type="checkbox" id="sony" name="sony" value="sony" checked={filters.brand.includes("sony")} onChange={(e)=>updateCheckboxFilter(
            "brand",
            e.target.value,
            e.target.checked
          )}  />
          <label htmlFor="sony">Sony</label>
        </div>
        <div className="brand-choice-div">
          <input type="checkbox" id="belkin" name="belkin" value="belkin" checked={filters.brand.includes("belkin")} onChange={(e)=>updateCheckboxFilter(
            "brand",
            e.target.value,
            e.target.checked
          )}  />
          <label htmlFor="belkin">belkin</label>
        </div>
        <div className="brand-choice-div">
          <input type="checkbox" id="jbl" name="jbl" value="jbl" checked={filters.brand.includes("jbl")}  onChange={(e)=>updateCheckboxFilter(
            "brand",
            e.target.value,
            e.target.checked
          )} />
          <label htmlFor="jbl">JBL</label>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesBrand;
