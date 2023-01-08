import TextareaAutosize from "react-textarea-autosize";
import { useState, useEffect, useContext } from "react";
import ProductivityContext from "../context/ProductivityContext";
import { TProductivityData } from "../context/ProductivityContext";

const currentDate = new Date();
const defaultFormData = {
  date: currentDate,
  topic: "",
  rating: "",
  achievement: "",
  struggle: "",
  journal: "",
  plan: "",
};

const ProductivityForm = () => {
  const { addEntry, updateEntry, entryEditor } =
    useContext(ProductivityContext);

  const [formData, setFormData] = useState<TProductivityData>(defaultFormData);
  const { date, topic, rating, achievement, struggle, journal, plan } =
    formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      //try if statement later
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (entryEditor.edit) {
      setFormData(entryEditor.item);
    }
  }, [entryEditor]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData = {
      date: currentDate,
      topic: topic,
      rating: rating,
      achievement: achievement,
      struggle: struggle,
      journal: journal,
      plan: plan,
    };
    if (entryEditor.edit === true) {
      updateEntry(entryEditor.item.id, newFormData);
    } else {
      addEntry(newFormData);
    }
    setFormData(defaultFormData);
  };

  return (
    <div className="flex flex-col bg-amber-200 p-2 my-4">
      <form
        onSubmit={handleSubmit}
        className=" bg-amber-300 shadow-md rounded px-8 pt-6 pb-8 m-2"
      >
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="Topic"
          >
            Topic
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topic"
            type="text"
            placeholder="Topic"
            value={topic}
          />
        </div>

        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            value={rating}
          />
        </div>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="achievement"
          >
            Achievement
          </label>
          <TextareaAutosize
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="achievement"
            placeholder="Achievement"
            value={achievement}
          />
        </div>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="struggle"
          >
            Struggle
          </label>
          <TextareaAutosize
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="struggle"
            placeholder="Struggle"
            value={struggle}
          />
        </div>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="journal"
          >
            Journal
          </label>
          <TextareaAutosize
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="journal"
            placeholder="Journal"
            value={journal}
          />
        </div>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="plan"
          >
            Plan
          </label>
          <TextareaAutosize
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="plan"
            placeholder="Plan"
            value={plan}
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            {entryEditor.edit ? "Confirm Edit" : "Submit Entry"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductivityForm;
