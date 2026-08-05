function CameraCategoryCard({ category }) {
  return (
    <div className="camera-category-card">
      <div className="camera-img-container">
        <img
          src={`${import.meta.env.VITE_API_URL}${category.image}`}
          alt="img"
          className="camera-category-card-image"
        />
      </div>
      <div className="camera-category-card-body card-body mt-3">
        <h5 className="camera-category-card-title">{category.name}</h5>
        <p>{category.description}</p>
      </div>
    </div>
  );
}


export default CameraCategoryCard;