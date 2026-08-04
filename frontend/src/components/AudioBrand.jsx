function AudioBrand({ filters, updateCheckboxFilter }) {
  return (
    <div className="audio-assistant mt-3">
      <p className="audio-assistant-title">Audio Brand</p>
      <hr className="hr-line" />
      <div className="audio-assistant-div">
        <div className="assistent-div">
          <input
            type="checkbox"
            name="sony"
            id="sony"
            value="sony"
            checked={filters.brand.includes("sony")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="sony">Sony</label>
        </div>
        <div className="assistent-div">
          <input
            type="checkbox"
            name="jbl"
            id="jbl"
            value="jbl"
            checked={filters.brand.includes("jbl")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="jbl">JBL</label>
        </div>
        <div className="assistent-div">
          <input
            type="checkbox"
            name="bose"
            id="bose"
            value="bose"
            checked={filters.brand.includes("bose")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="bose">Bose</label>
        </div>
        <div className="assistent-div">
          <input
            type="checkbox"
            name="oneplus"
            id="oneplus"
            value="oneplus"
            checked={filters.brand.includes("oneplus")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="oneplus">One Plus</label>
        </div>
        <div className="assistent-div">
          <input
            type="checkbox"
            name="pioneer"
            id="pioneer"
            value="pioneer"
            checked={filters.brand.includes("pioneer")}
            onChange={(e) =>
              updateCheckboxFilter("brand", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="pioneer">Pioneer</label>
        </div>
      </div>
    </div>
  );
}

export default AudioBrand;
