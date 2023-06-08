import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'

const RouteLayouts = () => {
  return (
    <>

    <Header />
    
    <Outlet />
    
    </>
  )
}

export default RouteLayouts