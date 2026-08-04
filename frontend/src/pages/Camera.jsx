import Hero from "../components/Hero";
import img1 from "../assets/images/camera1.jpg";
import img2 from "../assets/images/camera2.jpg";
import img3 from "../assets/images/camera3.jpg";
import "../styles/camera.css";
import CameraCategory from "../components/CameraCategory";
import CameraType from "../components/CameraType";
import CameraSpecifications from "../components/CameraSpecifications";
import CameraProducts from "../components/CameraProducts";
import LensComparision from "../components/LensComparision";
import SensorInnovation from "../components/SensorInnovation";
import { useState, useEffect } from "react";
import API from "../services/axios";
function Camera() {
  const [banner, setBanner] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({
    cameraType: [],
    brand: [],
    videoResolution: [],
    cameraResolution: [],
    price : 200000,
    search: "",
  });

  const updateCheckboxFilter = (key, value, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: checked
        ? [...prevFilters[key], value]
        : prevFilters[key].filter((val) => val !== value),
    }));
    setIsFiltered(true);
  };

  useEffect(() => {

    API.get("/products/banners/camera")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="camera-container">
      <Hero banners={banner} />
      <CameraCategory />
      <CameraType />
      <div className="row specifications-row mt-5 mb-4 g-4">
        <div className="col-md-3">
          <CameraSpecifications
            filters={filters}
            setFilters={setFilters}
            setIsFilterApplied={setIsFiltered}
            updateCheckboxFilter={updateCheckboxFilter}
          />
        </div>
        <div className="col-md-9">
          <CameraProducts filters={filters} setFilters={setFilters} isFilterApplied={isFiltered} />
        </div>
      </div>
      <LensComparision />
      <SensorInnovation />
    </div>
  );
}

export default Camera;
