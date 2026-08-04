function AccessoriesConnectivity({ filters, updateCheckboxFilter }) {
  return (
    <div className="accessories-connectivity-filter mt-3">
      <div className="accessories-connectivity-filter-header mb-2">
        <h4 className="accessories-connectivity-filter-title">Connectivity</h4>
        <p className="accessories-connectivity-filter-description">
          Refine by connectivity
        </p>
      </div>
      <div className="accessories-connectivity-filter-checkboxes">
        <div className="accessories-connectivity-checkbox">
          <input
            type="checkbox"
            id="wired"
            name="accessories"
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
        <div className="accessories-connectivity-checkbox">
          <input
            type="checkbox"
            id="wireless"
            name="accessories"
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
        <div className="accessories-connectivity-checkbox">
          <input
            type="checkbox"
            id="bluetooth"
            name="accessories"
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
          <label htmlFor="bluetooth">Bluetooth</label>
        </div>
        <div className="accessories-connectivity-checkbox">
          <input
            type="checkbox"
            id="usb-a"
            name="accessories"
            value="usb-a"
            checked={filters.connectivity.includes("usb-a")}
            onChange={(e) =>
              updateCheckboxFilter(
                "connectivity",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="usb-a">USB-A</label>
        </div>
        <div className="accessories-connectivity-checkbox">
          <input
            type="checkbox"
            id="usb-c"
            name="accessories"
            value="usb-c"
            checked={filters.connectivity.includes("usb-c")}
            onChange={(e) =>
              updateCheckboxFilter(
                "connectivity",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="usb-c">USB-C</label>
        </div>
        <div className="accessories-connectivity-checkbox">
          <input type="checkbox" id="hdmi" name="accessories" value="hdmi" checked={filters.connectivity.includes("hdmi")}
            onChange={(e) =>
              updateCheckboxFilter(
                "connectivity",
                e.target.value,
                e.target.checked,
              )
            } />
          <label htmlFor="hdmi">HDMI</label>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesConnectivity;
