import React, { useEffect, useState } from "react";
import { HttpService } from "../services/http-service";
import { detailsProductDto } from "../dto/detailsProductDto";
import { useParams } from "react-router-dom";
import img from "../../public/imsges/cuteLamma.jpg";

const DetailsProduct: React.FC = () => {
  const [product, setProduct] = useState({} as detailsProductDto);

  const params = useParams();

  useEffect(() => {
    HttpService.get<detailsProductDto>(`products/${params.id}`)
      .then((resp) => {
        setProduct(resp.data);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure>
        <img alt={product.title} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          title:{product.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            realPrice:{product.realPrice}
          </div>
          <div className="badge badge-outline">
            salesPrice:{product.salesPrice}
          </div>
          <div className="badge badge-outline w-[73%]">quantity:{product.qty} </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsProduct;
