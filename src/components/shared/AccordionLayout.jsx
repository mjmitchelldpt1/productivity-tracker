import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex justify-between p-2 mt-2 rounded bg-green-400"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          <BsFillArrowUpCircleFill className="w-8 h-8" />
        </div>
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl bg-red-300 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
