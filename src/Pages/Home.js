import React from 'react';
import Banner from './Banner';
import { useGetMealbyCategoriesQuery } from '../Features/MealApi';
import { Button, Input } from '@material-tailwind/react';
import Footer from '../Components/Footer';
import Latest from './Latest';
import { useNavigate } from 'react-router';


const Home = () => {

  const {data,isloading}=useGetMealbyCategoriesQuery();

  console.log(data);
  const nav=useNavigate();
  return (
    <>

      <Banner/>

    {/* Popular Categories */}

      <div className='mt-6 mx-[11%] pb-10'>

          <h1 className='text-5xl font-semibold'>Super Delicious</h1>

        <div className='grid grid-cols-4 md:grid-cols-2 gap-5'>

          {data?.categories.map((mealdata,index)=>{

            if(index<5)
            {

              
            return (
              <div onClick={()=>nav(`/category/${mealdata?.strCategory}`)} className='pt-10' key={`${mealdata?.idCategory}`} >
               
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



        {/* Subscribe */}


         <div className='bg-red-100'>

          <div className='text-center p-[6%]'>
            <h1 className='text-6xl md:text-3xl font-semibold'>Deliciousness</h1>
            <h1 className='text-6xl md:text-3xl font-semibold pt-3'>to your inbox</h1>

            <div className=''>

            <p className='text-3xl md:text-2xl pt-5 '>Enjoy weekly hand picked recipes and recommendations</p>

            <div className='flex justify-center mt-5'>
            <div className='w-[30%]' >
                <form action="#" className='bg-white rounded-l-sm'>
                  <Input className='border-none' type='email' label="Email Address"/>
                  
                </form>
                
              </div>
              <Button className=''>Subscribe</Button>
              </div>


          </div>




                
          </div>

         </div>



          {/* Latest */}

          <Latest />


         {/* Footer */}
         

      <Footer/>

    </>
  )
}

export default Home