function AudioCategory({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <div>
        <p className="audio-category-title">Category</p>
        <hr className="hr-line" />
      </div>
      <div className="category-div">
        <div className="music-category-item">
          <input
            type="checkbox"
            id="headphones"
            value="headphones"
            checked={filters.category.includes("headphones")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="headphones">Headphones</label>
        </div>
        <div className="music-category-item">
          <input
            type="checkbox"
            id="Earbuds"
            value="earbuds"
            checked={filters.category.includes("earbuds")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="Earbuds">Earbuds</label>
        </div>
        <div className="music-category-item">
          <input
            type="checkbox"
            id="soundbar"
            value="soundbar"
            checked={filters.category.includes("soundbar")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="soundbar">Soundbar</label>
        </div>
        <div className="music-category-item">
          <input
            type="checkbox"
            id="home-theater"
            value="home-theater"
            checked={filters.category.includes("home-theater")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="home-theater">Home theater</label>
        </div>
        <div className="music-category-item">
          <input
            type="checkbox"
            id="speaker"
            value="speaker"
            cchecked={filters.category.includes("speaker")}
            onChange={(e) =>
              updateCheckboxFilter("category", e.target.value, e.target.checked)
            }
          />
          <label htmlFor="speaker">Speaker</label>
        </div>
      </div>
    </div>
  );
}

export default AudioCategory;
