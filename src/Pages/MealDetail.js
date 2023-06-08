import React from 'react';
import { useGetSingleMealCategoriesQuery } from '../Features/MealApi';
import { useNavigate, useParams } from 'react-router';
import Footer from '../Components/Footer';

const MealDetail = () => {

  const{name}=useParams();
  const {data,isLoading}=useGetSingleMealCategoriesQuery(name);
  console.log(data);

  const nav=useNavigate();

if(data?.meals=== null)
{
  return(
    <>
    <h1>Page Not Found</h1>
    <Footer />
    </>
  )
}

else
{



  return (
    <>

  {data?.meals &&  <div className='mt-6 mx-[11%] pb-10'>

      

      <h1 className='text-5xl font-semibold  pt-10'>{name}</h1>

      <hr  className='p-5 mt-8 w-[100%]  border-blue-gray-200' />
      

      <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8'>

        {data?.meals && data?.meals.map((mealdata,index)=>{
          return (
              <div className='pt-10' key={`${mealdata?.idMeal}`} onClick={()=>nav(`/ingridient/${mealdata?.idMeal}`)}>
               
               <div className='text-center rounded-full hover:text-orange-500 bg-black'>
                  <img src={`${mealdata?.strMealThumb}`} className='  hover:scale-95 w-[100%] h-[100%] object-cover
                   duration-500 rounded-full  ease-in-out' alt={`${mealdata?.strMeal}`} />
                
               </div>
               <h1 className='text-xl text-center font-bold pt-5'>{`${mealdata?.strMeal}`}</h1>

            </div>


          )}
        )}

      </div>

    </div>}
    
    <Footer />
    
    </>
  )
}
}

export default MealDetail