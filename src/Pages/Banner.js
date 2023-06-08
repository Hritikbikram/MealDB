import React from 'react';
import cake from '../Images/cake.jpg';


const Banner = () => {
  return (
    <>
    <div className=' pb-[5%]'>
    <div className="bg-teal-50 grid grid-cols-2 gap-0 md:grid-cols-1 mt-6 ml-[11%] mr-[9%] rounded-3xl ">

      <div className="cakeimg  pr-0">

        <img className='rounded-l-3xl md:rounded-t-3xl md:rounded-b-none w-[100%]' src={cake} alt="Cake" />

      </div>

      <div className="info p-10 pl-[10%] pt-[15%]">

        <p className='font-medium text-lg'> <i className="fa-solid fa-arrow-trend-up text-orange-300 pr-2"></i> 85% would eat this again</p>

        <h1 className='text-5xl md:text-2xl font-bold pt-6'>Mighty Super Cheesecake</h1>

        <p className='font-medium text-2xl md:text-xl pt-7'>Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>




      </div>

    </div>

    </div>

    
    </>
  )
}

export default Banner