function GamingCategoryRowOne({ largecard, smallcard }) {
  return (
    <div className="row gaming-category-row">
      <div className="col-md-8">
        <div className="gaming-category-card gaming-category-card-large">
          <img
            src={`http://127.0.0.1:8000${largecard?.image}`}
            className="gaming-category-image"
          />
          <div className="controller-div">
            <h4 className="controller-title">{largecard?.name}</h4>
            <p className="controller-description">{largecard?.description}</p>
            <button className="shop-btn-div">
              Shop G-pro
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="gaming-category-card gaming-category-card-small">
          <img
            src={`http://127.0.0.1:8000${smallcard?.image}`}
            className="gaming-category-image"
          />
          <div className="audio-div">
            <h4 className="audio-title">{smallcard?.name}</h4>
            <p className="audio-description">{smallcard?.description}</p>
            <button className="shop-btn-div">
              Discover Horizon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingCategoryRowOne;
