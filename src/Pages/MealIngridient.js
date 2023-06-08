import React from 'react'
import { useParams } from 'react-router'
import { useGetMealIngirdientQuery } from '../Features/MealApi';
import Footer from '../Components/Footer';

const MealIngridient = () => {

  const {id}=useParams();
  const {data,isLoading}=useGetMealIngirdientQuery(id);
  console.log(data);

  

  return (
    <>
        
        <div className='mt-6 mx-[11%] pb-10'>

        

                
            {data?.meals.map((inddata,index)=>{


                return (

                  <div key={inddata?.idMeal}>

                          <h1 className='text-5xl font-semibold  pt-10'>{inddata?.strMeal}</h1>

                          <div className='font-bold pt-5 flex gap-10'>
                                
                                <div className='flex gap-3'>
                                    <i className="fa-solid fa-utensils gap-2 pt-1"> </i> <h1>Categories: {inddata?.strCategory}</h1>
                                </div>

                                <div className='flex gap-3'>
                                  <i className="fa-solid fa-location-dot pt-1"></i> 
                                  <h1> Place: {inddata?.strArea} </h1>
                                  
                                </div>



                          </div>



                      <hr  className='p-5 mt-8 w-[100%]  border-blue-gray-200' />


                      <div className='grid grid-cols-2'>


                            <div className='pt-10'>
                              
                              <img className='rounded-lg' src={`${inddata?.strMealThumb}`} alt="" />


                            </div>



                            
                            <div className="grid grid-cols-2">

                                <div className="p-[10%]">


                                  <h1 className='text-3xl font-semibold pb-[10%]'>Ingredients</h1>

                                    {[...Array(20).keys()].map((data, index) =>{
                                      return(
                                        <div className="" key={index}>
                                        <h1 className='pb-5'>{inddata?.[`strIngredient${index +1}`]}</h1>

                                        </div>
                                      )

                                    })}

                                </div>


                                <div className="p-[10%]">


                                    <h1 className='text-3xl font-semibold pb-[10%]'>Measures</h1>

                                    {[...Array(20).keys()].map((data, index) =>{
                                      return(
                                        <div className="" key={index}>
                                        <h1 className='pb-5'>{inddata?.[`strMeasure${index +1}`]}</h1>

                                        </div>
                                      )

                                    })}


                                </div>





                            </div>



                      </div>

                      

                      {/* Ingridient Pictures */}


                      <div className='grid grid-cols-5 md:grid-cols-2'>                   

                          {[...Array(20).keys()].map((data, index) =>{
                             return(
                    
                                  <div className="text-center" key={index}>
                                    
                                    <img className='rounded-full' src={`https://www.themealdb.com/images/ingredients/${inddata?.[`strIngredient${index +1}`]+`.png`}`} alt="" />
                          
                                    <h1 className='pb-5 font-semibold'>{inddata?.[`strIngredient${index +1}`]}</h1>



                                  </div>
                                  )
                                  })}

                      </div>
                          








                      {/* Instruction List */}


                      <div>

                            <h1 className='text-5xl font-semibold  pt-10'>Instructions</h1>

                            <hr  className='p-5 mt-8 w-[100%]  border-blue-gray-200' />

                            <p>{inddata?.strInstructions}</p>


                      </div>



                      





                  </div>

                  
                )


            }


            )}


        </div>

        <Footer />
    
    </>
  )
}

export default MealIngridient