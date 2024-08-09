import React from 'react';

const Cards = () => {
  return (
    <div className='w-[23%] min-h-[300px] bg- text-black my-[20px] mx-2 rounded-lg p-4 border border-gray-200 shadow-2xl shadow-gray-300 flex flex-col'>
      <div className='mb-2'>
        <span className='text-lg font-semibold'>Task Title</span>
      </div>
      <div className='w-ful h-auto  text-wrap break-words mt-4'>
          my name is nitesh he does things he likes every day
          my name is nitesh he does things he likes every day


      </div>
      <div className='mt-4 bg- flex justify-between text-white font-bold '>
        <button className='bg-blue-800 px-[5%] py-2 rounded-lg hover:cursor-pointer hover:bg-opacity-80'>Edit</button>
        <button className='bg-red-600 px-[5%] py-2 rounded-lg hover:cursor-pointer hover:bg-opacity-80'>Delete</button>
       

      </div>
    </div>
  );
};

export default Cards;

