import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'

const Home = () => {
  return (
    <div className='bg-slate-200  w-full h-[3200px] '>
      <Nav />
      
       <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
        {Categories.map((item) =>{
            return <div className='w-[100px] h-[100px] bg-white rounded-lg shadow-lg flex flex-col text-[15px]
             text-gray-500 font-semibold justify-center items-center gap-2 hover:bg-green-200 cursor-pointer transition-all duration-200'>
                 {item.image}
                {item.name}
               
            </div>
        })}
      </div>
      <div className='w-full h-[100px] flex flex-wrap gap-5 pt-8 pb-8 justify-center items-center'>
        {food_items.map((item)=>(<Card name ={item.food_name}  
        image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>))}
      </div>
      </div>
    
  )
}

export default Home;
