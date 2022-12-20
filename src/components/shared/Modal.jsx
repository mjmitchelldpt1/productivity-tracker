import React from "react";
import Button from "./Button";

const Modal = ({ setModal }) => {
  return (
    <div id="modalBackground" className="">
      <div id="modalContainer" className="">
        <div id="title" className="">
          <h2>Continue?</h2>
        </div>
        <div id="body" className="">
          <p>This will permanently delete this entry!</p>
        </div>
        <div id="footer" className="">
          <button
            className="button-primary"
            onClick={() =>
              setModal({ isModalOpen: false, confirmDelete: true })
            }
          >
            Confirm
          </button>
          <button
            className="button-primary"
            onClick={() => setModal({ isModalOpen: false })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
