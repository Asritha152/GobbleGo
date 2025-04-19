import React, { useEffect,useContext } from 'react'
import { CartContext } from '../context/cartContext';

function RestaurantCategorybody({itemData}) {
  const {setCartItems}=useContext(CartContext)
    console.log(itemData);
    
    const {name,isVeg,ratings,defaultPrice,description,price,id,imageId}=itemData;
    const {rating,ratingCountV2}=ratings.aggregatedRating;
  return (
    <>
    <div className='flex justify-between'>
        
        <div className='w-[85%]'>
        <div className='text-2xl mb-2'>{isVeg==1?"🌱":"🍗"}</div>
        <h1 className='font-extrabold mb-2'>{name}</h1>
        <h2 className='font-bold mb-2'>Rs.{price?price/100:defaultPrice/100}</h2>
        {rating && <div><span className='text-green-600'>{rating}</span><span>({ratingCountV2})</span></div>}
        <p className='text-gray-400 mb-2'>
            {description}
        </p>
        </div>
        <div className='w-37 h-37 rounded-md bg-gray-400 m-2 overflow-hidden relative'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} className='w-full h-full overflow-hidden object-cover' alt="" />
            <button className='text-white bg-black py-2 px-4 rounded-full cursor-pointer hover:text-black hover:bg-white left-12 absolute bottom-0  ' onClick={()=>{
              setCartItems(prev=>prev+1)

            }}>Add+</button>
        </div>
        
    </div>
    <hr className='p-2' />
    </>
  )
}

export default RestaurantCategorybody