import "../styles/accessories.css";
import Hero from "../components/Hero";
import img1 from "../assets/images/accessories1.jpg";
import img2 from "../assets/images/accessories2.jpg";
import img3 from "../assets/images/accessories3.jpg";
import AccessoriesFilters from "../components/AccessoriesFilters";
import AccessoriesProducts from "../components/AccessoriesProducts";
import { useState, useEffect } from "react";
import API from "../services/axios";

function Accessories() {
  const [banner, setBanner] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    connectivity: [],
    features : [],
    color : [],
    price: 5000,
    search: "",
  });

  const updateCheckboxFilter = (key,value,checked) => {
    setFilters((prevFilters)=>({
      ...prevFilters,
      [key] : checked ?
        [...prevFilters[key],value] :
        prevFilters[key].filter((val) => val !== value),
    }))
  }

  useEffect(() => {
    API.get("/products/banners/accessories")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="accessories-container">
      <Hero banners={banner} />
      <div className="row mt-4 accessories-row g-4">
        <div className="col-md-4">
          <AccessoriesFilters filters={filters} updateCheckboxFilter={updateCheckboxFilter} setFilters={setFilters} />
        </div>
        <div className="col-md-8 accessories-products-div">
          <AccessoriesProducts filters={filters}  setFilters={setFilters}  />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
