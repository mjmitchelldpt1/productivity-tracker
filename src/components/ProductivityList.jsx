import React from "react";
import ProductivityItem from "./ProductivityItem";
import { useState } from "react";

const ProductivityList = ({
  productivityData,
  setEntryId,
  setModalOpen,
  editEntry,
}) => {
  return (
    <div className="">
      {productivityData.map((item) => (
        <ProductivityItem
          key={item.id}
          item={item}
          setEntryId={setEntryId}
          setModalOpen={setModalOpen}
          editEntry={editEntry}
        />
      ))}
    </div>
  );
};

export default ProductivityList;
