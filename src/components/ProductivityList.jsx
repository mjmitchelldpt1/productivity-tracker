import React from "react";
import ProductivityItem from "./ProductivityItem";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductivityList = ({ setEntryId, setModalOpen, editEntry }) => {
  const fetchEntries = async () => {
    const response = await axios.get(
      `http://localhost:3000/entries?_sort=id&_order=desc`
    );

    return response.data;
  };

  const { data: entryData, status } = useQuery(["entries"], fetchEntries);

  if (status === "loading") {
    return <p>Loading</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }
  return (
    <div className="">
      {entryData.map((item) => (
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
