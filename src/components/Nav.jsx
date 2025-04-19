import {React,useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import useOnlinestatus from '../utils/useOnlinestatus'
import { CartContext } from '../context/cartContext';
function Nav() {
  const onlineStatus=useOnlinestatus();
  const {cartItems}=useContext(CartContext);
  return (
    <div className='bg-orange-500 p-4 w-full flex justify-between items-center sticky z-50 top-0'>
        <div className='text-orange-500 bg-white rounded-md p-2 font-extrabold text-2xl'>GobbleGo</div>
        <ul className='flex gap-5'>
            <li><div className='text-white font-bold' >Online:{onlineStatus?"✅":"🔴"}</div></li>
            <li><Link className='text-white font-bold' to='/'>Home</Link></li>
            <li><Link className='text-white font-bold' to='/about'>About</Link></li>
            <li><Link className='text-white font-bold' to='/contact'>Contact Us</Link></li>
          <li className='flex justify-center items-center'><Link className='text-white font-bold'> 🛒 Cart <span className='text-orange-500 text-center bg-white py-0.5 w-3.5 px-2 rounded-sm '>{cartItems}</span></Link></li>
        </ul>
    </div>
  )
}

export default Nav