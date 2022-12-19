import React from "react";

const CardHeader = ({ children }) => {
  return (
    <div className="flex justify-between bg-black text-white py-2 px-4 items-center rounded-t-lg">
      {children}
    </div>
  );
};

export default CardHeader;
