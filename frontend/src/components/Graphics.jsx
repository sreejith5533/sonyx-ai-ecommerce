function Graphics({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <h4 className="graphics-title">Graphics</h4>
      <div className="graphics-div mt-2">
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-1"
            name="Intel UHD Graphics"
            value="Intel UHD Graphics"
            checked={filters.graphics.includes("Intel UHD Graphics")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-1">Intel UHD Graphics</label>
        </div>
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-2"
            name="Intel Iris Xe Graphics"
            value="Intel Iris Xe Graphics"
            checked={filters.graphics.includes("Intel Iris Xe Graphics")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-2">Intel Iris Xe Graphics</label>
        </div>
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-3"
            name="AMD Radeon Graphics"
            value="AMD Radeon Graphics"
            checked={filters.graphics.includes("AMD Radeon Graphics")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-3">AMD Radeon Graphics</label>
        </div>
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-4"
            name="Apple M-Series GPU"
            value="Apple M-Series GPU"
            checked={filters.graphics.includes("Apple M-Series GPU")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-4">Apple M-Series GPU</label>
        </div>

        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-5"
            name="NVIDIA GeForce RTX 3050"
            value="NVIDIA GeForce RTX 3050"
            checked={filters.graphics.includes("NVIDIA GeForce RTX 3050")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-5">NVIDIA GeForce RTX 3050</label>
        </div>
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-6"
            name="NVIDIA GeForce RTX 4050"
            value="NVIDIA GeForce RTX 4050"
            checked={filters.graphics.includes("NVIDIA GeForce RTX 4050")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-6">NVIDIA GeForce RTX 4050</label>
        </div>
        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-7"
            name="NVIDIA GeForce RTX 4060"
            value="NVIDIA GeForce RTX 4060"
            checked={filters.graphics.includes("NVIDIA GeForce RTX 4060")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-7">NVIDIA GeForce RTX 4060</label>
        </div>

        <div className="graphics-choice-div">
          <input
            type="checkbox"
            id="graphics-8"
            name="NVIDIA GeForce RTX 4070"
            value="NVIDIA GeForce RTX 4070"
            checked={filters.graphics.includes("NVIDIA GeForce RTX 4070")}
            onChange={(e) =>
              updateCheckboxFilter("graphics", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="graphics-8">NVIDIA GeForce RTX 4070</label>
        </div>
      </div>
    </div>
  );
}

export default Graphics;
