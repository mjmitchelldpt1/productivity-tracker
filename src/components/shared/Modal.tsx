import ProductivityContext from "../../context/ProductivityContext";
import { useContext } from "react";

const Modal = () => {
  const { setModalOpen, deleteEntry, entryId } =
    useContext(ProductivityContext);
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-brightness-75">
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-white rounded-t bg-black">
            <h3 className="text-2xl font-semibold">Confirm Delete</h3>
          </div>
          <div className="relative p-4 flex-auto bg-slate-500">
            <p>You gone</p>
          </div>
          <div className="flex items-center justify-end p-4 border-t border-solid border-white bg-slate-500 rounded-b">
            <button
              className="button-primary"
              onClick={() => {
                deleteEntry(entryId);
                setModalOpen(false);
              }}
            >
              Confirm
            </button>
            <button
              className="button-primary hover:bg-red-400"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
