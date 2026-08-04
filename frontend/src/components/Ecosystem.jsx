import { Link } from "react-router-dom";
import GamingCategoryRowOne from "./GamingCategoryRowOne";
import GamingCategoryRowTwo from "./GamingCategoryRowTwo";
import { useState, useEffect } from "react";
import API from "../services/axios";

function Ecosystem() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/products/subcategory/gaming/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="ecosystem-section mt-5">
      <div className="ecosystem-heading-container">
        <div className="eco-heading">
          <h2 className="eco-title">The Ecosystem</h2>
          <p className="eco-description">
            Engineered to work together, built to dominate.
          </p>
        </div>
      </div>
      <div className="ecosystem-container mt-3">
        <GamingCategoryRowOne largecard={categories[0]} smallcard={categories[1]} />
        <GamingCategoryRowTwo largecard={categories[2]} smallcard={categories[3]} />
      </div>
    </section>
  );
}

export default Ecosystem;
