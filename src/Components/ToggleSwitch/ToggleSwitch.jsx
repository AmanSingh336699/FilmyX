import React, { useState } from 'react'

function ToggleSwitch({ data, onTabChange }) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)

    const activeTab = (tab, index) => {
        setLeft(index*100)
       
        setSelectedTab(index)
        
        onTabChange(tab, index)
    }

  

  return (
    <div className='h-8 w-40 bg-rose-500 rounded-full p-0.5'>
        <div className='relative flex items-center h-full'>
            {data.map((tab, index) => (
                <span key={index} className={`flex flex-1 items-center justify-center cursor-pointer
                     rounded-full text-m font-medium transition-colors duration-300
                    ${selectedTab === index ? "text-white z-10" : "text-black"}`} onClick={() => activeTab(tab, index)}>{tab}</span>
            ))}
            <span className='absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 left-0 top-0 transition-transform duration-400 ease-in-out' style={{transform: `translateX(${left}%)`, width: `${100/data.length}%`}} />
        </div>
    </div>
  )
}

export default ToggleSwitch