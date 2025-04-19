import React from 'react'
import { useState,useEffect } from 'react';
function useRestaurantdata() {
  const [restaurants,setrestaurants]=useState(null)
      useEffect( () => {
        console.log("Iam in home");
          
          async function get(){
              try {
                  const response = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.5013587&lng=78.37142329999999&carousel=true&third_party_vendor=1')
                  const json = await response.json()
                  setrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
              } catch (error) {
                  console.error('Error:', error.message);
              }
          console.log("fetching data...");
          
          console.log(restaurants)
          }
        get();  
      }, [])
      return restaurants;
}

export default useRestaurantdata