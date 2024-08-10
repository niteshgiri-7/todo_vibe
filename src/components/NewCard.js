import React, { useRef } from "react";
import useAddNewTask from "../utils/Hooks/useAddNewTask";
import { useDispatch } from "react-redux";
import { toggleAddTask } from "../utils/tasksSlice";
const NewCard = ({ setShowNewCard }) => {
  const topic = useRef(null);
  const text = useRef(null);
  const dispatch = useDispatch();
  const handleCancel = () => {
    setShowNewCard(false);
  };
  const activateButton = () => {
    dispatch(toggleAddTask());
  };
  useAddNewTask(topic, text);
  return (
    <div className="w-[25%] h-[40%] bg-green-200 rounded-lg absolute top-[20%] left-[30%] p-4 shadow-gray-600 border border-gray-200 shadow-2xl">
      <input
        className="w-full py-2 px-4 rounded-lg"
        placeholder="title"
        type="text"
        ref={topic}
      ></input>
      <textarea
        className="mt-2 w-full h-[70%] rounded-md p-4"
        ref={text}
        placeholder="description"
      ></textarea>
      <div className="mt-2  w-[100%] flex justify-end gap-6 font-bold">
        <button
          className=" bg-red-600 text-white  rounded-lg w-auto px-2 py-2 hover:bg-opacity-80 "
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          className="bg-blue-800 text-white rounded-lg w-auto px-2 py-2 hover:bg-opacity-80"
          onClick={() => activateButton()}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default NewCard;
