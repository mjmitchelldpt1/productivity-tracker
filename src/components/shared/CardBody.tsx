import React from "react";

const CardBody = ({ children }) => {
  return (
    <div className="flex flex-col bg-emerald-500 text-white py-2 px-4 rounded-b-lg">
      {children}
    </div>
  );
};

export default CardBody;
