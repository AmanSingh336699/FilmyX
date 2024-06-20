import React, { useState } from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'

export default function ToggleSwitch() {
    const [istoggle, setIsToggle] = useState(false)
    const handleToggle = ()=>{
        setIsToggle(!istoggle)
    }
    // document.body.style.backgroundColor = "orange"
  return (
        <div onClick={handleToggle} className={`border border-gray-800 flex z-[-1000] w-20 cursor-pointer  h-10 rounded-full transition-all duration-500`}> 
            <FaMoon color="gray" size={24} className={`absolute mt-2 ml-3 ${istoggle?'m-auto':'hidden'}`} />
            <span className={`h-9 w-9 bg-green-500 rounded-full transition-all my-auto duration-50 shadow-lg ${istoggle && 'ml-10'}`}></span>
            <FaSun color="yellow" className={`${istoggle?'hidden':'m-auto'}`} size={24} />       
        </div>
   
  )
}