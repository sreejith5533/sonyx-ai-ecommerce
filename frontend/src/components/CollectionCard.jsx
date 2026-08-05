import { Link } from "react-router-dom";
function CollectionCard({ category }) {
  return (
    <div className="collection-img-div">
      <img
        src={category.image}
        alt="img"
      />
      <Link className="collection-img-text" to={`/${category.slug}`}>{category.name}</Link>
    </div>
  );
}

export default CollectionCard;
