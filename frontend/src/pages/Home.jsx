import Hero from "../components/Hero";
import Collections from "../components/Collections";
import OfferSection from "../components/Offersection";
import LatestProducts from "../components/LatestProducts";
import img1 from "../assets/images/img1.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner-2.jpg";
import Legacy from "../components/Legacy";
import { useState, useEffect } from "react";
import API from "../services/axios";
function Home() {
  const [banner, setBanner] = useState([]);



  useEffect(()=>{
    API.get('/products/banners/home/')
    .then((res)=>{
      setBanner(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])




  return (
    <div>
      <Hero banners={banner} />
      <Collections />
      <OfferSection />
      <LatestProducts />
      <Legacy />
    </div>
  );
}

export default Home;
