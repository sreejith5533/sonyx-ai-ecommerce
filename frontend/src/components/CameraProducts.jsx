import CameraProductCard from "./CameraProductCard";
import { useState, useEffect } from "react";
import API from "../services/axios";
import SearchInput from "./SearchInput";

function CameraProducts({ filters, setFilters, isFilterApplied }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products/category/camera", { params: filters })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);
  return (
    <div className="camera-products-section">
      <div className="products-heading-div row g-3">
        <div className="products-title-div col-md-8">
          <h2 className="camera-products-title">High-Performance Catalog</h2>
          <small>{`${products.length} Products Available`}</small>
        </div>
        <div className="search-input-div col-md-4">
          <SearchInput filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="row g-3">
        {products.map((product, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <CameraProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CameraProducts;
