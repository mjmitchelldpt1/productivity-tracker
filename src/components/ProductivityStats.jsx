import React from "react";

const ProductivityStats = ({ productivityData }) => {
  const totalAverage = productivityData.reduce((total, item) => {
    console.log(typeof total, total, "total");
    console.log(typeof item.rating, item.rating, "rating");
    return total + item.rating;
  }, 0);

  return (
    <div>
      Average: {totalAverage / productivityData.length}
      Total Average: {totalAverage}
      Entries: {productivityData.length}
    </div>
  );
};

export default ProductivityStats;
