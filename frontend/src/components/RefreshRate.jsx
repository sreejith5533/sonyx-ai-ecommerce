const refreshRates = ["60hz", "120hz", "144hz"];

function RefreshRate({ filters, setFilters, updateCheckboxFilter }) {
  return (
    <div className="refresh-rate-div mt-3">
      <p className="refresh-rate-title">Refresh Rate</p>
      <hr className="hr-line" />
      <div className="refresh-rate-div">
        {refreshRates.map((rate,index)=>(
          <button
            key={index}
            className={`size-btn ${filters.refreshRate === rate ? "active" : ""}`}
            onClick={() => {
              setFilters((prev)=>({
                ...prev,
                refreshRate : prev.refreshRate === rate ? "" : rate
              }))
            }}
          >
            {rate}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RefreshRate;
