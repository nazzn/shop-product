import React, { useEffect, useState } from "react";
import { HttpService } from "../services/http-service";
import { detailsProductDto } from "../dto/detailsProductDto";
import { useParams } from "react-router-dom";

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
    <div className="flex flex-col ">
      <h3 className="text-2xl font-bold ">title:{product.title}</h3>
      <p>realPrice:{product.realPrice}</p>
      <p>salesPrice:{product.salesPrice}</p>
      <p>quantity:{product.qty}</p>
    </div>
  );
};

export default DetailsProduct;
