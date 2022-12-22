import React from "react";

const ProductivityStats = ({ productivityData }) => {
  let totalAverage = productivityData.reduce((total, item) => {
    return total + item.rating;
  }, 0);
  console.log(productivityData);
  return (
    <div>
      Average: {totalAverage / productivityData.length}
      Total Average: {totalAverage}
      Entries: {productivityData.length}
    </div>
  );
};

export default ProductivityStats;
