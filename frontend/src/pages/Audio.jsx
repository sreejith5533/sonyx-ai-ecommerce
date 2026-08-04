import Hero from "../components/Hero";
import img1 from "../assets/images/music1.jpg";
import img2 from "../assets/images/music2.jpg";
import img3 from "../assets/images/music3.jpg";
import MusicCategory from "../components/MusicCategory";
import "../styles/music.css";
import LuxuaryAudio from "../components/LuxuaryAudio";
import AudioSpecifications from "../components/AudioSpecifications";
import AudioProducts from "../components/AudioProducts";
import Innovation from "../components/Innovation";
import { useState, useEffect } from "react";
import API from "../services/axios";

function Audio() {
  const [banner, setBanner] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    batterylife: "",
    brand: "",
    price: 20000,
    search: "",
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
    API.get("/products/banners/audio")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Hero banners={banner} />
      <MusicCategory />
      <LuxuaryAudio />
      <div className="row mt-5 audio-row">
        <div className="col-md-3">
          <AudioSpecifications
            filters={filters}
            updateCheckboxFilter={updateCheckboxFilter}
            setFilters={setFilters}
          />
        </div>
        <div className="col-md-9">
          <AudioProducts filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <Innovation />
    </div>
  );
}

export default Audio;
