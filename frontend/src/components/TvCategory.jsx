function TvCategory() {
  return (
    <section className="tv-category-section mt-5">
      <div className="tv-category-heading text-center">
        <h2>Shop by Technology</h2>
        <p className="category-description mt-2">
          Select the breakthrough technology that powers your visual journey.
          Each display represents a pinnacle of SONYX engineering.
        </p>
      </div>
      <div className="row tv-category">
        <div className="feature">
          <i className="fa-solid fa-display"></i>
          <span>OLED</span>
        </div>

        <div className="feature">
          <i className="fa-solid fa-table-cells-large"></i>
          <span>Mini LED</span>
        </div>

        <div className="feature">
          <i className="fa-regular fa-circle-dot"></i>
          <span>QLED</span>
        </div>

        <div className="feature">
          <i className="fa-solid fa-tv"></i>
          <span>8K Resolution</span>
        </div>

        <div className="feature">
          <i className="fa-regular fa-circle-play"></i>
          <span>Google TV</span>
        </div>
      </div>
    </section>
  );
}

export default TvCategory;
