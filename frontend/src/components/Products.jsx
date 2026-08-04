import ProductTvCard from "./ProductTvCard";
import API from "../services/axios";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";


function Products({ filters, setFilters }) {

  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    API.get("/products/category/tv/", { params: filters })
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  return (
    <div className="products-div-tv">
      <div className="row">
        <div className="col-md-8">
          <div className="products-heading">
            <h2 className="products-title-tv">Premium Displays</h2>
            <span>{`${productInfo.length} products available`}</span>
          </div>
        </div>
        <div className="col-md-4">
          <SearchInput filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="row mt-4 g-3">
        {productInfo.map((product, index) => (
          <div className="col-12 col-sm-6 col-lg-4 television-col" key={index}>
            <ProductTvCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
