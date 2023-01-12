import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { TProductivityData } from "../context/ProductivityContext";
import useAddEntry from "./hooks/UseAddEntry";

const defaultFormData = {
  topic: "",
  rating: "",
  achievement: "",
  struggle: "",
  journal: "",
  plan: "",
};

const ProductivityForm = () => {
  const [formData, setFormData] = useState<TProductivityData>(defaultFormData);
  const { topic, rating, achievement, struggle, journal, plan } = formData;

  const { mutate, isLoading, error } = useAddEntry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      //try if statement later
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData = {
      topic: topic,
      rating: rating,
      achievement: achievement,
      struggle: struggle,
      journal: journal,
      plan: plan,
    };
    mutate(newFormData);

    setFormData(defaultFormData);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error...</p>;
  }

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
            required
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
            required
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
            Submit Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductivityForm;
