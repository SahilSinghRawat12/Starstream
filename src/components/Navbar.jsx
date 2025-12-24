import React, { useContext, useState } from 'react'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { TiWeatherSunny } from "react-icons/ti";
 

 



const Navbar = ({darkMode , setDarkMode , toggleDarkMode}) => {
 
 

  return (
    <div className='w-full'>
        <nav className='flex justify-between items-center border-b border-b-gray-300 h-16 px-24 select-none
        dark:bg-zinc-900 dark:text-white dark:border-b dark:border-b-[#262626]'>

          <NavLink to='/'>
             <div className='cursor-pointer' >
                  <span style={{ fontFamily: "'Pacifico', cursive" }} className='text-2xl'>
                    Starstream
                  </span>
             </div>
             </NavLink>

             <div>
                <ul className='flex justify-evenly items-center gap-8 px-10 '>

                  <NavLink to='/explore'>
                    <li className='cursor-pointer'>
                        <RiCompassDiscoverFill size={25}/>
                    </li>
                    </NavLink>

                    <li onClick={toggleDarkMode} className='cursor-pointer'>
                       {
                          darkMode ? (<TiWeatherSunny size={28}/>) : ( <MdOutlineDarkMode size={25}/>)
                       }
                       
                       
                    </li>
                </ul>
             </div>

             
        </nav>
    </div>
  )
}

export default Navbar