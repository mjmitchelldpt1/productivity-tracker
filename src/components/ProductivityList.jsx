import React from "react";
import ProductivityItem from "./ProductivityItem";
import { useState, useContext } from "react";
import axios from "axios";
import ProductivityContext from "../context/ProductivityContext";

const ProductivityList = () => {
  const { productivityData } = useContext(ProductivityContext);
  return (
    <div className="">
      {productivityData.map((item) => (
        <ProductivityItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductivityList;
