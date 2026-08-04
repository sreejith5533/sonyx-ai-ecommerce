import ExcellenceCard from "./ExcellenceCard";
import { useEffect, useState } from "react";
import API from "../services/axios";

function TechnicalExcellence() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products/sections/gaming-technical-excellence/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <section className="technical-excellance-section">
      <div className="excellence-heading-div">
        <h2 className="technical-excellance-title">Technical Excellence</h2>
        <p className="technical-excellance-description">
          Performance stats that speak for themselves.
        </p>
      </div>
      <div className="row mb-3 mt-4 excellence-cards-container">
        {products.map((products, index) => (
          <div className="col-md-3" key={index}>
            <ExcellenceCard product={products} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalExcellence;
