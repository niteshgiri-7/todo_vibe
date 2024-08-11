import React, { useRef } from "react";
const EditCard = ({ setShowEditCard, title, description, onEditDone }) => {
  const topic = useRef(null);
  const text = useRef(null);
  const handleCancel = () => {
    setShowEditCard(false);
  };
  const handleDone = () => {
    const newTitile = topic.current.value;
    const newDescription = text.current.value;
    onEditDone(newTitile, newDescription);
  };
  return (
    <div className="w-[25%] h-[40%] bg-green-200 rounded-lg absolute top-[20%] left-[30%] p-4 shadow-gray-600 border border-gray-200 shadow-2xl">
      <input
        className="w-full py-2 px-4 rounded-lg"
        placeholder="title"
        type="text"
        ref={topic}
        defaultValue={title}
      ></input>
      <textarea
        className="mt-2 w-full h-[70%] rounded-md p-4"
        ref={text}
        placeholder="description"
        defaultValue={description}
      ></textarea>
      <div className="mt-2  w-[100%] flex justify-end gap-6 font-bold">
        <button
          className=" bg-red-600 text-white  rounded-lg w-auto px-2 py-2 hover:bg-opacity-80 "
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button className="bg-blue-800 text-white rounded-lg w-auto px-2 py-2 hover:bg-opacity-80" onClick={()=>handleDone()}>
          Done
        </button>
      </div>
    </div>
  );
};

export default EditCard;
