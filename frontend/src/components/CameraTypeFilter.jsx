function CameraTypeFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="camera-price-filter-section">
      <h4 className="camera-price-filter-title">Camera Type</h4>
      <div className="camera-price-filter-options mt-2">
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="dslr"
            name="dslr"
            value="dslr"
            checked={filters.cameraType.includes("dslr")}
            onChange={(e) =>
              updateCheckboxFilter(
                "cameraType",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="dslr">DSLR</label>
        </div>
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="mirrorless"
            name="mirrorless"
            value="mirrorless"
            checked={filters.cameraType.includes("mirrorless")}
            onChange={(e) =>
              updateCheckboxFilter(
                "cameraType",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="mirrorless">Mirrorless</label>
        </div>
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="vlogging"
            name="vlogging"
            value="vlogging"
            checked={filters.cameraType.includes("vlogging")}
            onChange={(e) =>
              updateCheckboxFilter(
                "cameraType",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="vlogging">Vlogging</label>
        </div>
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="cinema"
            name="cinema"
            value="cinema"
            checked={filters.cameraType.includes("cinema")}
            onChange={(e) =>
              updateCheckboxFilter(
                "cameraType",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="gopro"
            name="gopro"
            value="gopro"
            checked={filters.cameraType.includes("gopro")}
            onChange={(e) =>
              updateCheckboxFilter("cameraType", e.target.value, e.target.name)
            }
          />
          <label htmlFor="gopro">Gopro</label>
        </div>
        <div className="camera-price-filter-option">
          <input
            type="checkbox"
            id="lenses"
            name="lenses"
            value="lenses"
            checked={filters.cameraType.includes("lenses")}
            onChange={(e) =>
              updateCheckboxFilter(
                "cameraType",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="lenses">Gopro</label>
        </div>
      </div>
    </div>
  );
}

export default CameraTypeFilter;
