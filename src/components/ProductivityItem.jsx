import React from "react";
import CardHeader from "./shared/CardHeader";
import CardBody from "./shared/CardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProductivityContext from "../context/ProductivityContext";
import { useContext } from "react";
import Modal from "./shared/Modal";

function ProductivityItem({ item }) {
  const { setEntryId, setModalOpen, editEntry, modalOpen } =
    useContext(ProductivityContext);
  return (
    <>
      {modalOpen ? <Modal /> : null}
      <div className="flex flex-col my-4">
        <CardHeader>
          <div className=" flex justify-center bg-indigo-400 border font-bold text-2xl p-1 rounded-full h-10 w-10 border-solid">
            {item.rating}
          </div>
          <div>Topic: {item.topic}</div>
          <div className="">
            <FontAwesomeIcon
              className="fa-icons hover:text-green-500"
              icon={faPen}
              onClick={() => editEntry(item)}
            />
            <FontAwesomeIcon
              className="fa-icons hover:text-red-500"
              icon={faXmark}
              onClick={() => {
                setEntryId(item.id);
                setModalOpen(true);
              }}
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
    </>
  );
}

export default ProductivityItem;
