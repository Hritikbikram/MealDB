import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Images/brand.svg';
import { Button, Input } from '@material-tailwind/react';
import { useFormik } from 'formik';


const Header = () => {

  const nav=useNavigate();

  const formik=useFormik({
    initialValues:{
      search:''
    },

    onSubmit:(vals,{resetForm})=>
    {
      nav(`search/${vals.search}`);
      resetForm();
    }
  })

  // const [isShow,setShow]=useState(false);
  return (
    // <header className='flex space-x-5 justify-between px-4 py-4 bg-black text-white items-baseline sticky top-0 z-20'>
      
      

    //   <div>

    //   <NavLink to='/' className="text-xl">Food App</NavLink>

    //   {isShow && <div className='sm:flex sm:flex-col space-y-2 mt-4 hidden'>
       
          

    //       <NavLink to='/'>Home</NavLink>
    //       <NavLink to='popular'>Popular</NavLink>

    //     </div>
    //   }

    //   </div>

    //   <div className='hidden sm:flex'>
    //       <button onClick={()=>setShow(!isShow)}>
          
    //         {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 
             
    //       </button>
    //     </div>



        
    //     <div className='space-x-5 sm:hidden'>
           
    //       <NavLink to='/'>Home</NavLink>
    //       <NavLink to='popular'>Popular</NavLink>


    //     </div>

    // </header>


    <header className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-20'>

      <div className='pl-9 py-4'>
        <NavLink to='/' className="text-xl">
          <img src={logo} alt="" />
        </NavLink>
      </div>



      <div className='space-x-7 py-5 text-xl'>

        <NavLink className="hover:text-orange-300 duration-200" to='/'>Home Page</NavLink>

        <NavLink className="hover:text-orange-300 duration-200"  to='/'>Pages <i className="fa-solid fa-chevron-down px-2"></i></NavLink>

        <NavLink className="hover:text-orange-300 duration-200"  to='/'>Contact Page <i className="fa-solid fa-chevron-down px-2"></i></NavLink>
        
        <NavLink className="hover:text-orange-300 duration-200" 
         to='/'>Elements <i className="fa-solid fa-chevron-down px-2"></i></NavLink>

      </div>




      <div className=' py-5 text-xl'>

        <form onSubmit={formik.handleSubmit}>
          <div className='flex '>
          <Input 
          className='rounded-r-none w-[100%]' 
          type='text'
           label='Search Item'
           name='search'
            onChange={formik.handleChange}
             value={formik.values.search}/>


          <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
          </div>
        </form>
        
      </div>      

    </header>
  )
}

export default Header