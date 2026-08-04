function BatteryLifeAudio({ filters, updateCheckboxFilter }) {
  return (
    <div className="battery-life mt-3">
      <p className="battery-life-title">Battery Life</p>
      <hr className="hr-line" />
      <div className="battery-life-div">
        <div className="audio-battery-life">
          <input
            type="radio"
            name="battery-life"
            value="30"
            id="30"
            checked={filters.batterylife.includes("30")}
            onChange={(e) =>
              updateCheckboxFilter(
                "batterylife",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="30">30 Hours</label>
        </div>
        <div className="audio-battery-life">
          <input
            type="radio"
            name="battery-life"
            value="50"
            id="50"
            checked={filters.batterylife.includes("50")}
            onChange={(e) =>
              updateCheckboxFilter(
                "batterylife",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="50">50 Hours</label>
        </div>
        <div className="audio-battery-life">
          <input
            type="radio"
            name="battery-life"
            value="70"
            id="70"
            checked={filters.batterylife.includes("50")}
            onChange={(e) =>
              updateCheckboxFilter(
                "batterylife",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="70">70 Hours</label>
        </div>
      </div>
    </div>
  );
}

export default BatteryLifeAudio;
