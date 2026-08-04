import Hero from "../components/Hero";
import img1 from "../assets/images/laptop1.jpg";
import img2 from "../assets/images/laptop2.jpg";
import img3 from "../assets/images/laptop3.jpg";
import LaptopFilters from "../components/LaptopFilters";
import LaptopProducts from "../components/LaptopProducts";
import "../styles/laptop.css";
import { useState, useEffect } from "react";
import API from "../services/axios";

function Laptop() {
  const [banner, setBanner] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    ram: [],
    storage : [],
    processor: [],
    graphics: [],
  });

  const updateCheckboxFilter = (key, value, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: checked
        ? [...prevFilters[key], value]
        : prevFilters[key].filter((val) => val !== value),
    }));
  };


  useEffect(() => {
    API.get("/products/banners/laptop")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="laptop-container">
      <Hero banners={banner} />
      <div className="row mt-4 laptop-row g-4">
        <div className="col-md-3">
          <LaptopFilters filters={filters} setFilters={setFilters} updateCheckboxFilter={updateCheckboxFilter} />
        </div>
        <div className="col-md-9">
          <LaptopProducts filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

export default Laptop;
