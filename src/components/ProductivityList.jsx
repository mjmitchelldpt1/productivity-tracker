import React from "react";
import ProductivityItem from "./ProductivityItem";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductivityList = ({
  setEntryId,
  setModalOpen,
  editEntry,
  productivityData,
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
