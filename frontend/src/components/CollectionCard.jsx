import { Link } from "react-router-dom";
function CollectionCard({ category }) {
  return (
    <div className="collection-img-div">
      <img
        src={`http://127.0.0.1:8000${category.image}`}
        alt="img"
      />
      <Link className="collection-img-text" to={`/${category.slug}`}>{category.name}</Link>
    </div>
  );
}

export default CollectionCard;
