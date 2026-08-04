import Hero from "../components/Hero";
import banner1 from "../assets/images/tv_banner1.jpg";
import banner2 from "../assets/images/tv_banner2.jpg";
import banner3 from "../assets/images/tv_banner3.jpg";
import TvCategory from "../components/TvCategory";
import "../styles/telivision.css";
import Specifications from "../components/Specifications";
import Products from "../components/Products";
import {useState,UseEffect, useEffect} from "react";
import API from "../services/axios";

function Telivisions(){

  const [banner, setBanner] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filters, setFilters] = useState({
    size: "",
    resolution: [],
    refreshRate: "",
    price : 50000,
    search : ""
  });

  const updateCheckboxFilter = (key,value,checked)=>{
    setFilters((prevFilters)=>({
      ...prevFilters,
      [key] : checked ?
        [...prevFilters[key],value] :
        prevFilters[key].filter((val) => val !== value),
    }))
  }


  useEffect(()=>{
    API.get('/products/banners/tv')
    .then((res)=>{
      setBanner(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return(
    <div>
      <Hero banners={banner} />
      <TvCategory />
      <div className="row">
        <div className="col-md-3">
          <Specifications filters={filters} setFilters={setFilters}  updateCheckboxFilter={updateCheckboxFilter}/>
        </div>
        <div className="col-md-9">
          <Products filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  )
}

export default Telivisions;