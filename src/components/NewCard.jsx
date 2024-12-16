import React, { useRef, useState } from "react";
import useAddTodos from "../utils/Hooks/useAddTodos";
const NewCard = ({ setShowNewCard,isEditCard }) => {
  const topic = useRef(null);
  const text = useRef(null);
  const [err, setErr] = useState("");
  
  const handleCancel = () => setShowNewCard(false);

  const { add } = useAddTodos();
  const handleAddTodos = () => {
    const title = topic.current.value;
    const description = text.current.value;  
      if(title.trim().length===0 || description.trim().length===0)
        setErr("Invalid entry");
      else {
      add({ title, description });
    setShowNewCard(false);
      }
  };

  return (
    <div className="w-[25%] h-[40%] bg-green-200 rounded-lg absolute top-[20%] left-[30%] p-4 shadow-gray-600 border border-gray-200 shadow-2xl">
      <span className="text-sm text-red-700">{err} </span>
      <input
        className="w-full py-2 px-4 rounded-lg"
        placeholder="title"
        type="text"
        ref={topic}
        onChange={()=>setErr("")}
      ></input>
      <textarea
        className="mt-2 w-full h-[70%] max-h-[70%] min-h-[70%] rounded-md p-4"
        ref={text}
        placeholder="description"
        onChange={()=>setErr("")}

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
          onClick={() => {
            handleAddTodos();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default NewCard;
