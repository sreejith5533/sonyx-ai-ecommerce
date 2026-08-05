function GamingCategoryRowTwo({ largecard, smallcard }) {
  return (
    <div className="row gaming-category-row-two">
      <div className="col-md-4">
        <div className="gaming-category-card gaming-category-card-small">
          <img
            src={largecard?.image}
            className="gaming-category-image"
          />
          <div className="monitor-div">
            <h4 className="monitor-title">{largecard?.name}</h4>
            <p className="monitor-description">{largecard?.description}</p>
            <button className="shop-btn-div">View Range</button>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="gaming-category-card gaming-category-card-large">
          <img
            src={smallcard?.image}
            className="gaming-category-image"
          />
          <div className="consoles-div">
            <h4 className="consoles-title">{smallcard?.name}</h4>
            <p className="consoles-description">{smallcard?.description}</p>
            <button className="shop-btn-div">Build Your Kit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingCategoryRowTwo;
