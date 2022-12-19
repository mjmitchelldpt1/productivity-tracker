import React from "react";
import CardHeader from "./shared/CardHeader";
import CardBody from "./shared/CardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProductivityItem = ({ item }) => {
  return (
    <div className="flex flex-col my-4">
      <CardHeader>
        <div className=" flex justify-center bg-indigo-400 border font-bold text-2xl p-1 rounded-full h-10 w-10 border-solid">
          {item.rating}
        </div>
        <div>
          Topic: {item.topic} Date: {item.date}
        </div>
        <div className="">
          <FontAwesomeIcon
            className="fa-icons hover:text-green-500"
            icon={faPen}
          />
          <FontAwesomeIcon
            className="fa-icons hover:text-red-500"
            icon={faXmark}
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="py-2">Achievement: {item.achievement}</div>
        <div className="py-2">Struggle: {item.struggle}</div>
        <div className="py-2">Journal: {item.journal}</div>
        <div className="py-2">Plan: {item.plan}</div>
      </CardBody>
    </div>
  );
};

export default ProductivityItem;
