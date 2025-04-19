import React, { useEffect, useState } from 'react'

function useOnlinestatus() {
  const [isOnline,setisOnline] =useState(true);
  useEffect(()=>{
    window.addEventListener("offline", ()=>{
        setisOnline(false);
    })
    window.addEventListener("online", ()=>{
        setisOnline(true);
    })
  },[])
  return isOnline ;
}

export default useOnlinestatus