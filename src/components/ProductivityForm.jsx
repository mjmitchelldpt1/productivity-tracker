import React from "react";
import Button from "./shared/Button";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

const ProductivityForm = ({ addEntry }) => {
  const dateObj = new Date();
  const currentDate = `${dateObj.getMonth()}-${dateObj.getDay()}-${dateObj.getFullYear()}`;
  const [formData, setFormData] = useState({
    date: currentDate,
    topic: "React",
    rating: 8,
    achievement: "",
    struggle: "",
    journal: "",
    plan: "plan",
  });

  const { date, topic, rating, achievement, struggle, journal, plan } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
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
    addEntry(newFormData);
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
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="Topic"
          >
            Date
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="text"
            placeholder={currentDate}
            value={date}
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
            placeholder="10"
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
            type="text"
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
            type="text"
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
            type="text"
            placeholder="Journal"
            value={journal}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Submit Post</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductivityForm;
