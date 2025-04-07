import React from 'react'
import image1 from '../assets/image1.avif'
const Card2 = () => {
  return (
    <div className='w-full h-[120px] bg-red-300 p-2'>
      <div className='w-[60%] h-full bg-slate-200 flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'><img src={image1} alt="" className='object-cover' /></div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-500 font-semibold'>PanCake</div>
            <div className='w-[110px]  h-[50px] bg-slate-400 flex rounded-lg overflow-hidden'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center'>-</button>
                <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>1</span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center'>+</button>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Card2
