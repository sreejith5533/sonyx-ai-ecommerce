function GamingConnectivity({ filters, updateCheckboxFilter }) {
  return (
    <div className="gaming-connectivity-div mt-3">
      <div className="gaming-connectivity-title">
        <h3 className="gaming-connectivity-title">Connectivity</h3>
      </div>
      <div className="gaming-connectivity-checkbox mt-2">
        <input
          type="checkbox"
          id="wired"
          name="gaming"
          value="wired"
          checked={filters.connectivity.includes("wired")}
          onChange={(e) =>
            updateCheckboxFilter(
              "connectivity",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="wired">Wired</label>
      </div>
      <div className="gaming-connectivity-checkbox">
        <input
          type="checkbox"
          id="wireless"
          name="gaming"
          value="wireless"
          checked={filters.connectivity.includes("wireless")}
          onChange={(e) =>
            updateCheckboxFilter(
              "connectivity",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="wireless">Wireless</label>
      </div>
      <div className="gaming-connectivity-checkbox">
        <input
          type="checkbox"
          id="bluetooth"
          name="gaming"
          value="bluetooth"
          checked={filters.connectivity.includes("bluetooth")}
          onChange={(e) =>
            updateCheckboxFilter(
              "connectivity",
              e.target.value,
              e.target.checked,
            )
          }
        />
        <label htmlFor="wired">Bluetooth</label>
      </div>
    </div>
  );
}

export default GamingConnectivity;
