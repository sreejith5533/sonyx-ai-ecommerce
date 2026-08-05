function ViewProductImg({ product }) {
  return (
    <div className="viewproduct-div">
      <div id="carouselExample" className="carousel slide viewproduct-carousel">
        <div className="carousel-inner">
          {product?.map((image, index) => (
            <div
              className={`viewproduct-img-div carousel-item ${index === 0 ? "active" : ""}`}
              key={image.id}
            >
              <img
                src={`${import.meta.env.VITE_MEDIA_URL}${image.image}`}
                className="viewproduct-img"
                alt="..."
              />
            </div>
          ))}
        </div>
        {product?.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-chevron-left fs-2 text-dark prev-icon"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-chevron-right fs-2 text-dark next-icon"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewProductImg;
