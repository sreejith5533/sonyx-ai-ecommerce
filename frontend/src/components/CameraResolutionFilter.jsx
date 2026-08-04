function CameraResolutionFilter({ filters, updateCheckboxFilter }) {
  return (
    <div className="camera-resolution-section mt-3">
      <h4 className="camera-resolution-title">Resolution</h4>
      <div className="camera-resolution-div mt-2">
        <input
          type="checkbox"
          name="camera-resolution-1"
          id="12Mp"
          value="12Mp"
          checked={filters.cameraResolution.includes("12Mp")}
          onChange={(e) =>
            updateCheckboxFilter(
              "cameraResolution",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="12Mp">12Mp</label>
      </div>
      <div className="camera-resolution-div">
        <input
          type="checkbox"
          name="20Mp"
          id="20Mp"
          value="20Mp"
          checked={filters.cameraResolution.includes("20Mp")}
          onChange={(e) =>
            updateCheckboxFilter(
              "cameraResolution",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="20Mp">20Mp</label>
      </div>
      <div className="camera-resolution-div">
        <input
          type="checkbox"
          name="24Mp"
          id="24Mp"
          value="24Mp"
          checked={filters.cameraResolution.includes("24Mp")}
          onChange={(e) =>
            updateCheckboxFilter(
              "cameraResolution",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="24Mp">24Mp</label>
      </div>
      <div className="camera-resolution-div">
        <input
          type="checkbox"
          name="36Mp"
          id="36Mp"
          value="36Mp"
          checked={filters.cameraResolution.includes("36Mp")}
          onChange={(e) =>
            updateCheckboxFilter(
              "cameraResolution",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="36Mp">36Mp</label>
      </div>
      <div className="camera-resolution-div">
        <input
          type="checkbox"
          name="48Mp"
          id="48Mp"
          value="48Mp"
          checked={filters.cameraResolution.includes("48Mp")}
          onChange={(e) =>
            updateCheckboxFilter(
              "cameraResolution",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="48Mp">48Mp</label>
      </div>
    </div>
  );
}

export default CameraResolutionFilter;
