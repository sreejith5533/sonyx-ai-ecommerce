function Resolution({ filters, updateCheckboxFilter }) {
  return (
    <div className="resolution mt-3">
      <p className="resolution-title">Resolution</p>
      <hr className="hr-line" />
      <div className="resolution-div">
        <div className="mt-2 resolution-btn">
          <input
            type="checkbox"
            className="checkbox"
            id="hd-ready"
            value="HD Ready"
            checked={filters.resolution.includes("HD Ready")}
            onChange={(e) =>
              updateCheckboxFilter(
                "resolution",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="hd-ready">HD Ready</label>
        </div>
        <div className="mt-2 resolution-btn">
          <input
            type="checkbox"
            className="checkbox"
            id="full-hd-1080p"
            value="Full HD (1080p)"
            checked={filters.resolution.includes("Full HD (1080p)")}
            onChange={(e) =>
              updateCheckboxFilter(
                "resolution",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="full-hd-1080p">Full HD (1080p)</label>
        </div>
        <div className="mt-2 resolution-btn">
          <input
            type="checkbox"
            className="checkbox"
            id="4k"
            value="4k UHD"
            checked={filters.resolution.includes("4k UHD")}
            onChange={(e) =>
              updateCheckboxFilter(
                "resolution",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="4k">4k UHD</label>
        </div>
        <div className="mt-2 resolution-btn">
          <input
            type="checkbox"
            className="checkbox"
            id="8k"
            value="8k UHD"
            checked={filters.resolution.includes("8k UHD")}
            onChange={(e) =>
              updateCheckboxFilter(
                "resolution",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="8k">8k UHD</label>
        </div>
      </div>
    </div>
  );
}

export default Resolution;
