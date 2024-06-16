import React, { useState } from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'

export default function ToggleSwitch() {
    const [istoggle, setIsToggle] = useState(false)
    const handleToggle = ()=>{
        setIsToggle(!istoggle)
    }
    // document.body.style.backgroundColor = "orange"
  return (
    <div>
        <div onClick={handleToggle} className={`border border-gray-800 flex z-[-1000] w-20  h-10 rounded-full transition-all duration-500`}> 
            <FaMoon color="gray" size={24} className={`absolute mt-2 ml-3 ${istoggle?'m-auto':'hidden'}`} />
            <span className={`h-10 w-10 bg-slate-500 rounded-full transition-all duration-50 shadow-lg ${istoggle && 'ml-10'}`}></span>
            <FaSun color="yellow" className={`${istoggle?'hidden':'m-auto'}`} size={24} />       
        </div>
    </div>
  )
}