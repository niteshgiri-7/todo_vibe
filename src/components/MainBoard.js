import React, { useState } from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import NewCard from "./NewCard";
import useFetchTask from "../utils/Hooks/useFetchTask";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useDeleteTask from "../utils/Hooks/useDeleteTask";
import { deleteTaskActivate } from "../utils/tasksSlice";
const MainBoard = () => {
  const [showNewCard, setShowNewCard] = useState(false);
  const { allTasks} = useSelector(
    (store) => store.taskSlice
  );
  const dispatch = useDispatch();
  const {handleDelete} = useDeleteTask();
  const handleBtnClick = () => {
    if (allTasks.length > 8) {
      console.log("cannot add more than 8 tasks");
      return null;
    }
    setShowNewCard(true);
  };
  useFetchTask();

  const onDelete = async(id)=>{
    console.log(id)
     await handleDelete(id);
       dispatch(deleteTaskActivate())
  }
  return (
    <div className="w-full h-auto bg- px-[4%] py-[0.7%] relative">
      <NavBar />
      <div className="h-[5%] w-[90%]   text-white mt-[1%] flex justify-between pr-[10%]">
        <span className="font-bold text-3xl text-black">Main Boards</span>
        <div>
          <button
            className="bg-[#314c9e] px-6 py-4 rounded-lg font-bold shadow-2xl hover:bg-gradient-to-r hover:from-orange-200  bg-gradient-to-br from-orange-100  "
            onClick={() => handleBtnClick()}
          >
            Add Board
          </button>
        </div>
      </div>
      <div className=" w-[45%] py-4 flex justify-between  text-[#476279]">
        <span>
          you have <span className="font-bold">6</span> tasks remaining
        </span>
        <span className="pr-2">
          sort by:
          <select className="font-bold ml-2">
            <option>oldest</option>
            <option>newest</option>
          </select>
        </span>
      </div>
      {showNewCard && <NewCard setShowNewCard={setShowNewCard} />}
      {!allTasks ? (
        <div className=" w-[100%] bg-gray-100 flex flex-wrap justify-start  px-2">
          {Array.from({ length: 8 }, (_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : (
        <div className=" w-[100%] bg-green-50 flex flex-wrap justify-start  px-2">
          {allTasks.map((allTask) => (
            <Cards
              key={allTask._id}
              id={allTask._id}
              title={allTask.title}
              description={allTask.description}
              onDelete = {onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainBoard;
