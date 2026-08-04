const sizes = ['32"', '43"', '55"', '65"', '75"', '85"+'];

function ScreenSize({ filters,setFilters }) {
  return (
    <div className="screen-size">
      <p className="screen-size-title">Screen Size</p>
      <hr className="hr-line mb-3" />
      <div className="size-div">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`size-btn ${filters.size === size ? "active" : ""}`}
            onClick={() => {
              setFilters((prev)=>({
                ...prev,
                size : prev.size === size ? "" : size
              }))
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ScreenSize;
