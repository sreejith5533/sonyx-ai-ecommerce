import ViewProductContent from "../components/ViewProductContent";
import ViewProductImg from "../components/ViewProductImg";
import '../styles/productdetails.css';
import {useParams} from 'react-router-dom';
import API from "../services/axios";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    API.get(`/products/viewproduct/${id}`)
      .then((res)=>{
        setProduct(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [id])

  console.log(product)
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 view-product-column">
          <ViewProductImg product={product.images} />
        </div>
        <div className="col-md-6">
          <ViewProductContent product={product} />
        </div>
      </div>
    </div>
  );
}



export default ProductDetails;