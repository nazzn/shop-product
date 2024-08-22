import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./products/products-list";
import HomePage from "./HomePage";
import DetailsProduct from "./products/detailsProduct";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductsList />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
