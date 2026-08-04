import API from "../services/axios";
import AccessoriesProductCard from "./AccessoriesProductCard";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
function AccessoriesProducts({ filters, setFilters }) {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    API.get("/products/category/accessories", { params: filters })
      .then((res) => {
        setAccessories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);
  return (
    <div>
      <div className="products-heading-div row g-3">
        <div className="products-title-div col-md-8">
          <h2 className="products-title">High-Performance Catalog</h2>
          <small>{`${accessories.length} Products Available`}</small>
        </div>
        <div className="search-input-div col-md-4">
          <SearchInput filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="row g-3 accessories-products-row">
        {accessories.map((acccessory, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <AccessoriesProductCard product={acccessory} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesProducts;
