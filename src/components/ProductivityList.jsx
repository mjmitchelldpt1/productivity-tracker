import React from "react";
import ProductivityItem from "./ProductivityItem";

const ProductivityList = () => {
  const dataList = [
    {
      id: 1,
      date: "today",
      topic: "React",
      rating: 9,
      achievement: "learn react",
      struggle: "what concept was difficult",
      journal: "write out some jargon and convert to code",
      plan: "write your plan or something to focus for tomorrow",
    },
    {
      id: 2,
      date: "today",
      topic: "React",
      rating: 3,
      achievement: "learned doctors",
      struggle: "existence is pain",
      journal: "you journal",
      plan: "finish me",
    },
    {
      id: 3,
      date: "today",
      topic: "React",
      rating: 5,
      achievement: "sort it out mate",
      struggle: "distractions",
      journal: "where am i",
      plan: "procrastinate",
    },
  ];

  return (
    <div className="">
      {dataList.map((item) => (
        <ProductivityItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductivityList;
