import React from 'react';
import {useGetMealbyCategoriesQuery } from '../Features/MealApi';
import { useNavigate } from 'react-router';

const Latest = () => {

  const nav=useNavigate();
  
  const {data,isloading}=useGetMealbyCategoriesQuery();
  return (
    <>
    

    
    <div className='mt-6 mx-[12%] pb-10'>

        <h1 className='text-5xl font-semibold pt-12'>Latest Meals</h1>

        <div className='grid grid-cols-4 md:grid-cols-2 gap-5'>

            {data?.categories.map((mealdata,index)=>{

              if(index<12)
              {

                
              return (
                <div onClick={()=>nav(`/category/${mealdata?.strCategory}`)}  className=' pt-12 pb-5 ' key={`${mealdata?.idCategory}`} >
                
                  <div className='text-center'>
                      <img src={`${mealdata?.strCategoryThumb}`} className='hover:scale-110 duration-300' alt={`${mealdata?.strCategory}`} />
                      <h1 className='text-xl font-medium pt-5'>{`${mealdata?.strCategory}`}</h1>
                  </div>
                  

                </div>
              )


              }else{

                
              return null        
              }
              

            }

                    


            )}




        </div>


    </div>


    
    </>
  )
}

export default Latest