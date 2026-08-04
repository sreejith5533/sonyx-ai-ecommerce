import "../styles/newproduct.css";
import NewProduct from "./NewProduct";
import API from "../services/axios";
import { useEffect, useState } from "react";

function LatestProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.get("/products/sections/home-new-arrivals/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="latest-products-section">
      <div className="latest-products-heading">
        <h2 className="new-products-heading">Latest Innovation</h2>
        <p>The edge of technology, now available for your home and studio.</p>
      </div>
      <div className="row latest-products-div g-3">
        {products.map((product, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <NewProduct key={index} product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestProducts;
