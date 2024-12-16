import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoForm = ({ onSubmit, onClose, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");

  const handleSubmit = () => {
    if (title.trim() === "" || description.trim() === "") {
      toast.info("Both fields are required!");
      return;
    }
    onSubmit({ title, description });
    onClose();
  };
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">
        {initialData.title ? "Edit Todo" : "Add New Todo"}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded w-full p-2"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 max-h-[150px] min-h-[150px] overflow-y-hidden"
          placeholder="Enter description"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
