import React from 'react'
import { Link } from 'react-router-dom'
function Restaurantcard({r}) {
    const {id,areaName,avgRating,cloudinaryImageId,cuisines,name,locality,sla}=r?.info
                const slastring=sla.slaString ||''
    return (
        <Link key={id} to={`/restaurant/${parseInt(id)}`} className='w-55 h-75  inline-block hover:scale-95'>
          <div className='bg-gray-200 w-full  h-37 rounded-md' >
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" className='w-full h-full object-cover rounded-md' />
    
          </div>
          <h1 className='font-bold  '>{name}</h1>
          <div><span>{avgRating}</span>.<span> {slastring}</span></div>
          <p className='text-gray-400 overflow-x-hidden '>{cuisines.join(',')}</p>
          <div className='text-gray-400'>{areaName}</div>
        </Link>
      )
}

export default Restaurantcard