import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'

const Home = () => {
  return (
    <div className='bg-slate-200  w-full min-h-screen'>
      <Nav />
      
       <div>
        {Categories.map((item) =>{
            return <div>
                {item.name}
                {item.image}
            </div>
        })}
      </div>
      </div>
    
  )
}

export default Home;
