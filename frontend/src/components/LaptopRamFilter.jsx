function LaptopRamFilter({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <h4 className="ram-title">RAM</h4>
      <div className="ram-div mt-2">
        <div className="ram-choice-div">
          <input type="checkbox" id="8" name="8" value="8GB RAM" checked={filters.ram.includes("8GB RAM")} onChange={(e)=>updateCheckboxFilter("ram", e.target.value, e.target.checked)} />
          <label htmlFor="8">8 GB</label>
        </div>
        <div className="ram-choice-div">
          <input type="checkbox" id="16" name="16" value="16GB RAM" checked={filters.ram.includes("16GB RAM")} onChange={(e)=>updateCheckboxFilter("ram", e.target.value, e.target.checked)} />
          <label htmlFor="16">16 GB</label>
        </div>
        <div className="ram-choice-div">
          <input type="checkbox" id="24" name="24" value="24GB RAM" checked={filters.ram.includes("24GB RAM")} onChange={(e)=>updateCheckboxFilter("ram", e.target.value, e.target.checked)} />
          <label htmlFor="24">24 GB</label>
        </div>
        <div className="ram-choice-div">
          <input type="checkbox" id="32" name="32" value="32GB RAM" checked={filters.ram.includes("32GB RAM")} onChange={(e)=>updateCheckboxFilter("ram", e.target.value, e.target.checked)} />
          <label htmlFor="32">32 GB</label>
        </div>
        <div className="ram-choice-div">
          <input type="checkbox" id="64" name="64" value="64GB RAM" checked={filters.ram.includes("64GB RAM")} onChange={(e)=>updateCheckboxFilter("ram", e.target.value, e.target.checked)} />
          <label htmlFor="64">64 GB</label>
        </div>
      </div>
    </div>
  );
}

export default LaptopRamFilter;
