import React from 'react';
import bgimg from '../Images/wine.jpeg';


const BgImg = () => {
  return (
    <>
    

{/* Background */}

< div className="relative">
  <div className="absolute w-[100%] h-[100%] top-0 overlay z-10 ">
</div>

<div className=' px-4 text-center align-middle py-[6%] ' style={{ backgroundImage:`url(${bgimg})` }}>

  <h3 className='text-xl font-bold py-4 text-white'>The Unique </h3>
  
  
  <h1 className='text-7xl font-bold text-white  py-4'>Food DB</h1>
  
  
  <h3 className='text-sm font-bold text-white py-4'>Steak | Chicken | Beef | Buff | Seafood</h3>
</div>
    

</div>


    </>
  )
}

export default BgImg