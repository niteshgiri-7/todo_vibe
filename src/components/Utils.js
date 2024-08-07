import React from 'react'

const Utils = () => {
    const lists = ["Home","Main Boards","Notes","Journal","Settings"]
  return (
<div className='w-[12vw] h-screen bg-[#f0f5f9] p-4 text-[5vw]'>
    <h1 className='font-bold text-[30%] bg- text-black p-2 text-center'>Todo Vibe</h1>
    <div className='bg- w-full h-[50%] mt-[30%] text-[20%] text-[#476279] p-2'>
        <div className='bg- p-2 w-auto h-auto mt-[70px] flex flex-col items-center'>
            <ul className='flex flex-col gap-10 '>
              {
                lists.map((list)=>{
                    return(
                        <>
                        <li className='hover:underline cursor-pointer hover:bg-gradient-to-r from-gray-300'>{list}</li>
                        </>
                    )
                })
              }
            </ul>
        </div>
    </div>
</div>

  )
}

export default Utils
