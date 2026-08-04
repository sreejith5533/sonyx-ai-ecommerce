import "../styles/wishlist.css";
import WishlistCard from "../components/WishlistCard";
import {useWishlistContext} from "../context/WishlistContext";

function WishList() {
  const { wishlist } = useWishlistContext();
  return (
    <div>
      <div className="wishlist-heading-div mb-3">
        <h2 className="wishlist-heading">WISHLIST</h2>
        <p className="wishlist-paragraph">
          A curated selection of engineering excellence. Define your technical
          landscape and initialize your studio upgrade.
        </p>
      </div>
      <div className="row wishlist-row g-4">
        {wishlist.map((item,index)=>(
        <div className="col-lg-4 col-md-6 wishlist-column" key={index}>
          <WishlistCard product={item} />
        </div>
        ))}

      </div>
    </div>
  );
}

export default WishList;
