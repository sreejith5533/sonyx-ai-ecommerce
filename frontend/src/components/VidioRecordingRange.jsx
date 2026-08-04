function VidioRecordingRange({ filters, updateCheckboxFilter }) {
  return (
    <div className="camera-sensor-filter mt-3">
      <h4 className="sensor-filter-title">Video Recording</h4>
      <div className="video-recording-div mt-2">
        <div className="video-recording-option">
          <input type="checkbox" id="full-hd" name="full-hd" value="full hd" checked={filters.videoResolution.includes("full hd")} onChange={(e)=>updateCheckboxFilter(
            "videoResolution",
            e.target.value,
            e.target.checked
          )} />
          <label htmlFor="full-hd">Full HD (1080p)</label>
        </div>
        <div className="video-recording-option">
          <input type="checkbox" id="4k uhd" name="4k uhd" value="4k uhd" checked={filters.videoResolution.includes("4k uhd")} onChange={(e)=>updateCheckboxFilter(
            "videoResolution",
            e.target.value,
            e.target.checked
          )}  />
          <label htmlFor="4k uhd">4K UHD</label>
        </div>
        <div className="video-recording-option">
          <input type="checkbox" id="6k" name="6k" value="6k" checked={filters.videoResolution.includes("6k")} onChange={(e)=>updateCheckboxFilter(
            "videoResolution",
            e.target.value,
            e.target.checked
          )} />
          <label htmlFor="6k">6K</label>
        </div>
        <div className="video-recording-option">
          <input type="checkbox" id="8k" name="8k" value="8k" checked={filters.videoResolution.includes("8k")} onChange={(e)=>updateCheckboxFilter(
            "videoResolution",
            e.target.value,
            e.target.checked
          )} />
          <label htmlFor="8k">8K</label>
        </div>
      </div>
    </div>
  );
}


export default VidioRecordingRange;
