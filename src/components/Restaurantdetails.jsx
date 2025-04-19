import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import AccordianItem from './Restaurantcategory';

function Restaurantdetails() {
    const [Restaurantdata,setResturantdata]=useState([]);
    const [categories,setCategories]=useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    console.log(id);
    const [isOpenIndex,setisOpenIndex] =useState(-1);
    const handleClick=()=>{
        
        navigate('/');
      }
      useEffect(() => {
        async function get(params) {
            try {
                const response = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5013587&lng=78.37142329999999&restaurantId=${id}&submitAction=ENTER`)
                const json = await response.json();
                console.log("fetched")
                setResturantdata(json?.data?.cards[2].card?.card?.info);
                setCategories(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
                console.log(categories);} catch (
                    error) {
                console.error('Error:', error.message);}
        }
        get();
          
      }, [])
      

      
  return (
    <>
    <button onClick={handleClick} className='text-white rounded-md p-2 m-2 bg-blue-600'>Back</button>
    <div>
    <h1 className='text-4xl font-bold'>{Restaurantdata.name}</h1>
    <div className='p-6 border-1  m-4 border-gray-400 rounded-lg'>
        <div className='flex gap-4'><span className='font-bold'>{Restaurantdata.avgRatingString}({Restaurantdata.totalRatingsString})</span>
        <span className='font-bold'>{Restaurantdata.costForTwoMessage}</span>
        </div>
        <h2 className='text-orange-600 font-bold'>{Restaurantdata?.cuisines?.join(',')}</h2>
        <div>
            <h3> <span className='font-bold'>Outlet: </span><span className='text-gray-500'>{Restaurantdata.areaName}</span></h3>
            <h3 className='font-bold'>{Restaurantdata?.sla?.slaString}</h3>
        </div>
    </div>
        {
            categories.map((c,index)=>{
                console.log(c);  
                return <AccordianItem c={c?.card?.card} index={index} isOpen={isOpenIndex===index?true:false} setisOpen={setisOpenIndex}></AccordianItem>
            })
        }

    </div>
    </>
  )
}

export default Restaurantdetails