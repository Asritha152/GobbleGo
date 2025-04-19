import React, { useState } from 'react'
import Nav from './Nav'
import { useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import Restaurantcard from './Restaurantcard'
import useRestaurantdata from '../utils/useRestaurantdata'
import useOnlinestatus from '../utils/useOnlinestatus'
import Offlinepage from './Offlinepage'
function Home() {
   const restaurants=useRestaurantdata() || null;
const onlinestatus=useOnlinestatus();

  if (!onlinestatus) {
        return <Offlinepage></Offlinepage> 
    }
if (!restaurants) {
        return <Shimmer/>   
    }
    
  return (
        <div className='flex flex-wrap gap-4 justify-center p-2 overflow-x-hidden'>
        {
            restaurants.map(r=>{
                return (
                  <Restaurantcard r={r}></Restaurantcard>
                )
                
})      
        }
         
       
    </div>
  )
}

export default Home