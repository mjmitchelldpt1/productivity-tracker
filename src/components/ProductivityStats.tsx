import { useContext } from "react";
import ProductivityContext from "../context/ProductivityContext";

const ProductivityStats = () => {
  const { productivityData } = useContext(ProductivityContext);
  const totalAverage = productivityData.reduce((total, item) => {
    return total + parseInt(item.rating);
  }, 0);

  return (
    <div className="flex gap-5">
      <span>Average: {totalAverage / productivityData.length} </span>
      <span>Total Average: {totalAverage} </span>
      <span>Entries: {productivityData.length} </span>
    </div>
  );
};

export default ProductivityStats;
