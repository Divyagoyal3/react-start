import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'
import { useState } from 'react'


function Home () {
  let [cate,setCate] = useState(food_items);
  function filter(category){
    const normalizedCategory = category.trim().toLowerCase();
  
    console.log("Normalized selected category:", normalizedCategory);
  
    if(normalizedCategory === "all"){
      setCate(food_items);
    } else {
      let newCategory = food_items.filter((item) => {
        const itemCategory = item.food_category.trim().toLowerCase();
        console.log("Comparing:", itemCategory, "===", normalizedCategory);
        return itemCategory === normalizedCategory;
      });
  
      setCate(newCategory);
    }
  }
  
  return (
    <div className='bg-slate-200  w-full min-h-[3200px] '>
      <Nav />
      
       <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
        {Categories.map((item) =>{
            return <div className='w-[100px] h-[100px] bg-white rounded-lg shadow-lg flex flex-col text-[15px]
             text-gray-500 font-semibold justify-center items-center gap-2
              hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
                 {item.image}
                {item.name}
               
            </div>
        })}
      </div>
      <div className='w-full h-[100px] flex flex-wrap gap-5 pt-8 pb-8 justify-center items-center'>
        {cate.map((item)=>(<Card name ={item.food_name}  
        image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>))}
      </div>
      </div>
    
  )
}

export default Home;
