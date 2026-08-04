function CameraBrandFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="camera-brand-section mt-3">
      <h4 className="camera-brand-title">Brand</h4>
      <div className="camera-brand-div mt-2">
        <input
          type="checkbox"
          name="canon"
          id="canon"
          value="cannon"
          checked={filters.brand.includes("cannon")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="canon">Canon</label>
      </div>
      <div className="camera-brand-div">
        <input
          type="checkbox"
          name="nikon"
          id="nikon"
          value="nikon"
          checked={filters.brand.includes("nikon")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="nikon">Nikon</label>
      </div>
      <div className="camera-brand-div">
        <input
          type="checkbox"
          name="sony"
          id="sony"
          value="sony"
          checked={filters.brand.includes("sony")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="sony">Sony</label>
      </div>
      <div className="camera-brand-div ">
        <input
          type="checkbox"
          name="panasonic"
          id="panasonic"
          value="panasonic"
          checked={filters.brand.includes("panasonic")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="panasonic">Panasonic</label>
      </div>
      <div className="camera-brand-div">
        <input
          type="checkbox"
          name="dji"
          id="dji"
          value="dji"
          checked={filters.brand.includes("dji")}
          onChange={(e) =>
            updateCheckboxFilter("brand", e.target.value, e.target.checked)
          }
        />
        <label htmlFor="dji">DJI</label>
      </div>
    </div>
  );
}

export default CameraBrandFilter;
