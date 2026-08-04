import { Link } from "react-router-dom";
import CameraCategoryCard from "./CameraCategoryCard";
import { useState, useEffect } from "react";
import API from "../services/axios";

function CameraCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/products/subcategory/camera/")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="camera-category-section mt-5">
      <div className="camera-category-heading">
        <div>
          <p className="ecosystem-description">Ecosystem</p>
          <h2 className="camera-category-title">Shop by Category</h2>
        </div>
      </div>
      <div className="camera-category-row">
        {categories.map((category, index) => (
          <CameraCategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CameraCategory;
