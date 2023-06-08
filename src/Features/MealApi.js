import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const base="https://www.themealdb.com/api/json/v1/1/";

export const mealapi=createApi({
  reducerPath:'MealApi',
  baseQuery :fetchBaseQuery({baseUrl:base}),
  endpoints:(builder)=>({

    getMealbyCategories:builder.query({
      query:(query)=>({
        url:'categories.php',
        method:'GET'
      })
    }),



    getSingleMealCategories:builder.query({
      query:(query)=>({
        url:'filter.php',
        method:'GET',
        params:{
          c:`${query}`
        }
      })
    }),


    getMealIngirdient:builder.query({
      query:(query)=>({
        url:'lookup.php',
        method:'GET',
        params:{
          i:`${query}`
        }
      })
    }),

    getMealBySearch:builder.query({
      query:(query)=>({
        url:'search.php',
        method:'GET',
        params:{
          s:`${query}`
        }
      })
    })

    


  })

})
export const {useGetMealbyCategoriesQuery,useGetSingleMealCategoriesQuery, useGetMealIngirdientQuery,useGetMealBySearchQuery}=mealapi;