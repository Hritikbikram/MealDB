import React from 'react'
import { Route, Routes } from 'react-router'
import RouteLayouts from './Pages/RouteLayouts'
import Home from './Pages/Home'
import MealDetail from './Pages/MealDetail'
import SearchPage from './Pages/SearchPage'
import MealIngridient from './Pages/MealIngridient'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<RouteLayouts />}>
        
        <Route path='/' element={<Home />}/>

        <Route path='category/:name' element={<MealDetail />}/>

        <Route path='ingridient/:id' element={<MealIngridient />} />

        <Route path='search/:searchText' element={<SearchPage/>}/>




        <Route path='*' element={<h1>Page not found Here</h1>} />


      </Route>
    </Routes>
    
    </>
  )
}

export default App