import React, { useEffect, useState } from "react";
import { ProductsListDTO } from "../dto/productDto";
import { HttpService } from "../services/http-service";
import { useNavigate } from "react-router-dom";
import MainLayouts from "../layouts/main-layouts";

type listProduct = {
  id: string;
  title: string;
  categoryTitle: string;
  realPrice: number;
  salesPrice: number;
  qty: number;
  createdAt: string;
};
const ProductsList = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };
  const HandelOneOriduct =()=>{
navigate('/OneProduct')

  }
  const [products, setProducts] = useState<ProductsListDTO[]>([]);
  useEffect(() => {
    HttpService.get<ProductsListDTO[]>("products?page=1")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {" "}
      <h1 onClick={onClickHome} className="p-2 text-2xl font-bold  ">
        Home
      </h1>
      <div className="grid grid-cols-4 gap-4 m-2 p-4 "onClick={HandelOneOriduct}>
        {products.map((item) => (
            
          <div key={item.id} className="border p-3 m-1 rounded-md ">
            <h3 className="text-lg font-medium pb-2">{item.title}</h3>
            <p>RealPrice: {item.realPrice} </p>
            <p>SalesPrice: {item.salesPrice} </p>
            <p>quantity: {item.qty} </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductsList;
