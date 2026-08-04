import MusicCategoryCard from "./MusicCategoryCard";
import { useState, useEffect } from "react";
import API from "../services/axios";
function MusicCategory() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    API.get("/products/subcategory/audio/")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="music-category-section mt-5">
      <div className="music-category-heading">
        <p className="music-category-title">Shop by Category</p>
        <p className="music-category-description">
          Precision instruments for every listening environment.
        </p>
      </div>
      <div className="music-category-row">
        {category.map((category, index) => (
          <MusicCategoryCard  key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default MusicCategory;
