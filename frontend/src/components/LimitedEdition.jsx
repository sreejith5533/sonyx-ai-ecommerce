import EditionCard from "./EditionCard";
import { useState, useEffect } from "react";
import API from "../services/axios";

function LimitedEdition({ title, description, imageUrl }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.get("/products/sections/gaming-limited-edition/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <section className="limited-edition-section">
      <div className="limited-heading-div mb-3">
        <h2 className="limited-edition-title">Limited Edition</h2>
        <p className="limited-edition-description">
          Exclusive drops for the elite collective.
        </p>
      </div>
      <div className="row limited-edition-row g-3">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="edition-card">
              <div className="edition-card-image-container">
                {product.is_limited_edition && (
                  <span className="edition-card-availability">
                    Only {product.stock} units available
                  </span>
                )}
                <img
                  src={`${import.meta.env.VITE_MEDIA_URL}${product.thumbnail}`}
                  alt="Limited Edition"
                  className="edition-card-image"
                />
              </div>
              <div className="edition-card-body card-body mt-3">
                <h5 className="edition-card-title">{product.name}</h5>
                {product.available_from && (
                  <p className="edition-card-description">
                    Available from {product.available_from}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LimitedEdition;
