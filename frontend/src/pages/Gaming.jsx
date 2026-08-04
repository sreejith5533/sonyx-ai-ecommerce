import gaming1 from "../assets/images/gaming1.jpg";
import gaming2 from "../assets/images/gaming2.jpg";
import gaming3 from "../assets/images/gaming3.jpg";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import "../styles/gaming.css";
import TechnicalExcellence from "../components/TechnicalExcellence";
import LimitedEdition from "../components/LimitedEdition";
import { useState, useEffect } from "react";
import API from "../services/axios";
import GamingFilters from "../components/GamingFilters";
import GamingProducts from "../components/GamingProducts";

function Gaming() {

  const [banner, setBanner] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filters, setFilters] = useState({
    category : [],
    connectivity : [], 
    brand : [],
    price : 50000,
    search : ""
  });


  const updateCheckboxFilter = (key, value, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: checked
        ? [...prevFilters[key], value]
        : prevFilters[key].filter((val) => val !== value),
    }));
    setIsFilterApplied(true);
  };

  useEffect(()=>{
    API.get('/products/banners/gaming')
    .then((res)=>{
      setBanner(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <Hero banners={banner}/>
      <Ecosystem />
      <TechnicalExcellence />
      <LimitedEdition />
      <div className="row mt-5 gaming-row">
        <div className="col-md-3">
          <GamingFilters filters={filters} setFilters={setFilters} updateCheckboxFilter={updateCheckboxFilter} />
        </div>
        <div className="col-md-9">
          <GamingProducts filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

export default Gaming;
