import React, { useState } from 'react'
import RestaurantCategorybody from './RestaurantCategorybody';

function Restaurantcategory({c,isOpen,setisOpen,index}) {
  const {title,itemCards} = c;
  
  return (
    <>
    <div onClick={()=>{setisOpen(prev => (prev === index ? -1 : index))
}} className='p-5 bg-slate-100 mb-3  flex justify-between  transition-all duration-300 ease-in-out'>
    <h1 className='font-bold text-xl  '>{title} ({itemCards.length})</h1>
    <span className='text-2xl'>{isOpen?"˄":"˅"}</span>
    </div>
    {isOpen && <div className='p-5'>{
      itemCards.map((item)=>{
        return <RestaurantCategorybody itemData={item?.card?.info}></RestaurantCategorybody>
      })
        }</div>}
    </>
  )
}

export default Restaurantcategory;