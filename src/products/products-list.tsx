import React, { useEffect, useState } from "react";
import { ProductsListDTO } from "../dto/productDto";
import { HttpService } from "../services/http-service";
import { useNavigate } from "react-router-dom";
import img from "../../public/imsges/cuteLamma.jpg";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductsListDTO[]>([]);

  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  useEffect(() => {
    HttpService.get<ProductsListDTO[]>("products?page=1")
      .then((resp) => {
        setProducts(resp.data);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card bg-base-100 shadow-xl  ">
      <h1 onClick={onClickHome} className="p-2 text-2xl font-bold  ">
        Home
      </h1>
      <div className="">
    <figure>
        <img />
      </figure>
      <div className="card-body grid grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border py-2 px-4 m-1  rounded-md ">
            <h2
              className="card-title"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              {item.title}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p className="p-2">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline p-2">
                RealPrice: {item.realPrice}
              </div>
              <div className="badge badge-outline p-2">
                SalesPrice: {item.salesPrice}
              </div>
              <div className="badge badge-outline p-2 m-1">quantity: {item.qty}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default ProductsList;
