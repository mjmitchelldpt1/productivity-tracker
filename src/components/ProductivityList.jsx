import React from "react";
import ProductivityItem from "./ProductivityItem";
import { useState } from "react";

const ProductivityList = ({ productivityData, deleteEntry }) => {
  return (
    <div className="">
      {productivityData.map((item) => (
        <ProductivityItem key={item.id} item={item} deleteEntry={deleteEntry} />
      ))}
    </div>
  );
};

export default ProductivityList;
