import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
const Nav = () => {
    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-lg rounded-md '>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form action="" className='w-[50%] h-[60px] md: wd-[80%] bg-white flex items-center px-5 gap-5 shadow-md rounded-md'>
                <IoSearch className='text-green-500 w-[20px] h-[20px] rounded shadow-lg' />
                <input type="text" placeholder='Search food items' className=' w-[100%]  text-[16px] md:text-[20px] border-none outline-none  h-[40px] rounded-md ' />
            </form>
            <div className='w-[60px] h-[60px] bg-white  relative flex justify-center items-center shadow-lg rounded-md '>
                <span className='text-green-500 text-[18px] absolute top-0 right-1.5 font-semibold'>0</span>
                <LuShoppingBag className=' w-[30px] h-[30px] text-green-500  font-bold' />
            </div>
        </div>
    )
}

export default Nav
