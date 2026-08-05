import "../styles/collections.css";
import CollectionCard from "./CollectionCard";
import { useState, useEffect } from "react";
import API from "../services/axios";

function Collections() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/products/department/electronics/categories")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="collections-section mt-5">
      <div className="collections-title-div mb-3">
        <h2 className="collections-title">Curated Collections</h2>
        <p>Engineered for the discerning enthusiast.</p>
      </div>
      <div className="collection-div">
        {categories.map((category, index) => (
          <CollectionCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Collections;
