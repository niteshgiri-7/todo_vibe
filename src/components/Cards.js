import React from "react";

const Cards = ({id, title, description,onDelete,onEdit}) => {
  return (
    <div className="w-[23%] h-auto min-h-[200px]  text-black my-[20px] mx-2 rounded-lg p-4 border border-gray-200 shadow-2xl shadow-gray-300 flex flex-col">
      <div className="mb-2 ">
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <div className="w-ful h-auto  text-wrap break-words mt-4 ">
        {description}
      </div>
      <div className=" bg- flex justify-between text-white font-bold  mt-auto">
        <button className="bg-blue-800 px-[5%] py-2 rounded-lg hover:cursor-pointer hover:bg-opacity-80" onClick={()=>{onEdit(id)}}>
          Edit
        </button>
        <button className="bg-red-600 px-[5%] py-2 rounded-lg hover:cursor-pointer hover:bg-opacity-80" onClick={()=>{onDelete(id)}}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cards;
