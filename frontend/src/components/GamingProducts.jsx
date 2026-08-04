import GamingProductCard from "./GamingProductCard";
import { useState, useEffect } from "react";
import API from "../services/axios";
import SearchInput from "./SearchInput";

function GamingProducts({ filters, setFilters }) {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    API.get("/products/sections/gaming-products/", {
      params: filters,
    })
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);
  return (
    <div className="row products-row-gaming">
      <div className="products-heading-div row g-3">
        <div className="products-title-div col-md-8">
          <h2 className="products-title">High-Performance Catalog</h2>
          <small>{`${productInfo.length} Products Available`}</small>
        </div>
        <div className="search-input-div col-md-4">
          <SearchInput filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="gaming-products-section row g-3">
        {productInfo.map((product, index) => (
          <div className="col-12  col-sm-6 col-lg-4" key={index}>
            <GamingProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamingProducts;
