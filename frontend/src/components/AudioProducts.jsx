import API from "../services/axios";
import { useState, useEffect } from "react";
import AudioProductCard from "./AudioProductCard";
import SearchInput from "./SearchInput";

function AudioProducts({ filters,setFilters }) {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    API.get("/products/category/audio/", {
      params: filters,
    })
      .then((res) => {
        setProductsInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="products-heading">
            <h2 className="products-title">Premium Audio Collection</h2>
            <small>{`${productsInfo.length} Products Available`}</small>
          </div>
        </div>
        <div className="col-md-4">
          <SearchInput filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="row">
        {productsInfo.map((product, index) => (
          <div className="col-12 col-sm-6 col-lg-4 g-3" key={index}>
            <AudioProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudioProducts;
