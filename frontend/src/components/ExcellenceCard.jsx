function ExcellenceCard({ product , index}) {
  return (
    <div className="excellence-card card">
      <div className="excellence-card-image-container">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="excellence-card-image"
        />
      </div>
      <div className="excellence-card-body card-body">
        <h5 className="excellence-card-title">{product.name}</h5>
        <p className="excellence-card-description">{product.specification.find((item)=> item.name === "editionname")?.value}</p>
        <p className="excellence-card-price">&#8377; {product.price}</p>
        <button className="excellence-card-button btn mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ExcellenceCard;
