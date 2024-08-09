import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";

const MainBoard = () => {
  return (
    <div className="w-full h-auto  px-[4%] py-[0.7%] ">
      <NavBar />
      <div className="h-[5%] w-[90%]   text-white mt-[1%] flex justify-between pr-[10%]">
        <span className="font-bold text-3xl text-black">Main Boards</span>
        <div>
        <button className="bg-[#314c9e] px-6 py-4 rounded-lg font-bold shadow-2xl hover:bg-gradient-to-r hover:from-orange-200  bg-gradient-to-br from-orange-100  ">Add Board</button>
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
        <div    className=' w-[100%]  flex flex-wrap justify-start  px-2'>
        <Cards/>
        <Cards/>

        <Cards/>

        <Cards/>

        <Cards/>

        <Cards/>

        <Cards/>

        <Cards/>
      


     
    </div>
    </div>
  );
};

export default MainBoard;
