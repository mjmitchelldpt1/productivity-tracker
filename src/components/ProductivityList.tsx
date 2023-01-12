import ProductivityItem from "./ProductivityItem";
import useProductivityData from "./hooks/UseProductivityData";

const ProductivityList = () => {
  const { data, isLoading, error } = useProductivityData();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error...</p>;
  }

  return (
    <div className="">
      {data?.map((item) => (
        <ProductivityItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductivityList;
