import useProductivityData from "./hooks/UseProductivityData";
const ProductivityStats = () => {
  const { data } = useProductivityData();

  const totalAverage = (data || []).reduce((total, item) => {
    return total + parseInt(item.rating);
  }, 0);

  return (
    <div className="flex gap-5">
      <span>Average: {totalAverage / (data || []).length} </span>
      <span>Total Average: {totalAverage} </span>
      <span>Entries: {(data || []).length} </span>
    </div>
  );
};

export default ProductivityStats;
