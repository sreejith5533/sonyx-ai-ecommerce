import LaptopProductCard from "./LaptopProductCard";
import { useState, useEffect } from "react";
import API from "../services/axios";
import SearchInput from "./SearchInput";

function LaptopProducts({ filters, setFilters }) {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    API.get("/products/category/laptops", { params: filters })
      .then((res) => {
        setLaptops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);
  return (
    <div className="laptop-products-section">
      <div className="products-heading-div row g-3">
          <div className="col-md-8">
            <h2 className="laptop-products-title">High-Performance Catalog</h2>
            <small>{`${laptops.length} Products Available`}</small>
          </div>
          <div className="col-md-4">
            <SearchInput filters={filters} setFilters={setFilters} />
          </div>
      </div>
      <div className="row g-3">
        {laptops.map((product, index) => (
          <div className="col-12 col-sm-6  col-lg-4" key={index}>
            <LaptopProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaptopProducts;
