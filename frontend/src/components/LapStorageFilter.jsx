function LapStorageFilter({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <h4 className="storage-title">Storage</h4>
      <div className="storage-div mt-2">
        <div className="storage-choice-item">
          <input type="checkbox" id="256gbssd" name="256gbssd" value="256gb ssd" checked={filters.storage.includes("256gb ssd")} onChange={(e)=>updateCheckboxFilter("storage", e.target.value, e.target.checked)} />
          <label htmlFor="256gbssd">256 GB SSD</label>
        </div>
        <div className="storage-choice-item">
          <input type="checkbox" id="512gbssd" name="512gbssd" value="512gb ssd" checked={filters.storage.includes("512gb ssd")} onChange={(e)=>updateCheckboxFilter("storage", e.target.value, e.target.checked)} />
          <label htmlFor="512gbssd">512 GB SSD</label>
        </div>
        <div className="storage-choice-item">
          <input type="checkbox" id="1tbssd" name="1tbssd" value="1tb ssd" checked={filters.storage.includes("1tb ssd")} onChange={(e)=>updateCheckboxFilter("storage", e.target.value, e.target.checked)} />
          <label htmlFor="1tbssd">1 TB SSD</label>
        </div>
        <div className="storage-choice-item">
          <input type="checkbox" id="2tbssd" name="2tbssd" value="2tb ssd" checked={filters.storage.includes("2tb ssd")} onChange={(e)=>updateCheckboxFilter("storage", e.target.value, e.target.checked)} />
          <label htmlFor="2tbssd">2 TB SSD</label>
        </div>
      </div>
    </div>
  );
}



export default LapStorageFilter;